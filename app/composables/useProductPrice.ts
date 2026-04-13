/**
 * useProductPrice.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Busca o preço real do MUUD Calm direto da Shopify Storefront API (GraphQL).
 *
 * ESTRATÉGIA PARA SITES ESTÁTICOS (nuxt generate / Hostinger):
 * ─ Em modo static não há SSR de verdade — o fetch ocorre no browser.
 * ─ Para evitar o skeleton piscante, inicializamos o useState com o preço
 *   real já hardcoded (FALLBACK_PRICE_CENTS). O valor é exibido
 *   INSTANTANEAMENTE, sem esperar a API.
 * ─ O useFetch com `lazy: true` roda em background e atualiza o preço
 *   silenciosamente se o valor da Shopify for diferente.
 * ─ Resultado: ZERO delay visual, preço sempre correto.
 *
 * ⚠️ Se o preço mudar na Shopify, atualize também FALLBACK_PRICE_CENTS abaixo.
 *
 * Uso:
 *   const { displayPrice, installmentPrice, priceInCents, loading } = useProductPrice()
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Configuração Shopify ─────────────────────────────────────────────────────
const SHOPIFY_DOMAIN   = 'muud-9850.myshopify.com'
const SHOPIFY_TOKEN    = '852e9a0118f7b535ffc24ff7ad6c8fbd'
const SHOPIFY_API_URL  = `https://${SHOPIFY_DOMAIN}/api/2024-04/graphql.json`
const MERCHANDISE_ID   = 'gid://shopify/ProductVariant/45404886237363'

// ─── Preço de referência (aparece instantaneamente) ───────────────────────────
// ⚠️ Atualize se o preço da Shopify mudar!
const FALLBACK_PRICE_CENTS = 8490  // R$ 84,90

// ─── Query GraphQL ────────────────────────────────────────────────────────────
const GQL_QUERY = `
  query GetVariantPrice($id: ID!) {
    node(id: $id) {
      ... on ProductVariant {
        price {
          amount
          currencyCode
        }
      }
    }
  }
`

// ─── Formatador de moeda ──────────────────────────────────────────────────────
function formatBRL(cents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100)
}

export function useProductPrice() {
  // ─── useState: começa com o preço real como valor inicial ─────────────────────
  // Diferente do valor 0 anterior, agora o usuário vê o preço IMEDIATAMENTE
  // no primeiro render, sem esperar qualquer fetch de API.
  const priceInCents = useState<number>('muud-calm-price', () => FALLBACK_PRICE_CENTS)

  // ─── useFetch com lazy: true ──────────────────────────────────────────────────
  // `lazy: true` significa: NÃO bloqueie a renderização aguardando a API.
  // A página abre com o fallback visível, e quando a Shopify responder,
  // o preço atualiza automaticamente (caso seja diferente do fallback).
  const { pending } = useFetch<{ data: { node: { price: { amount: string } } } }>(
    SHOPIFY_API_URL,
    {
      key:    'shopify-muud-calm-price',
      method: 'POST',
      lazy:   true,  // ← não bloqueia a renderização
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
      },
      body: { query: GQL_QUERY, variables: { id: MERCHANDISE_ID } },

      // Extrai o preço da resposta da Shopify e atualiza o estado global
      transform(res) {
        const amount = parseFloat(res?.data?.node?.price?.amount ?? '0')
        // Só sobrescreve se a API retornou um número válido
        if (amount > 0) {
          priceInCents.value = Math.round(amount * 100)
        }
        return res
      },

      // Se o Nuxt já buscou este dado (SSR ou generate), não refaz o fetch
      getCachedData(key, nuxtApp) {
        return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
      },
    }
  )

  // ─── Computeds de exibição ────────────────────────────────────────────────────
  // `loading` agora só é `true` se o fetch está pendente E o preço ainda é 0.
  // Como iniciamos com FALLBACK_PRICE_CENTS > 0, `loading` nunca bloqueia a UI.
  const loading = computed(() => pending.value && priceInCents.value === 0)

  const displayPrice = computed(() => formatBRL(priceInCents.value))

  const installmentPrice = computed(() =>
    `ou 2x de ${formatBRL(Math.ceil(priceInCents.value / 2))} sem juros`
  )

  return {
    displayPrice,
    installmentPrice,
    priceInCents,
    loading,
  }
}

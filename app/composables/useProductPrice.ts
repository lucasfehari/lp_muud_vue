/**
 * useProductPrice.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Busca o preço real do MUUD Calm direto da Shopify Storefront API (GraphQL).
 *
 * POR QUE useState + useFetch?
 * ─ O Nuxt SSR roda o composable no servidor, mas os refs normais são
 *   descartados ao chegar no cliente (hydration começa do zero → flash).
 * ─ `useState('key', ...)` serializa o valor no payload HTML e o cliente
 *   reidrata com o mesmo valor — ZERO flash garantido.
 * ─ `useFetch` executa o request durante o SSR e cacheia via `useAsyncData`,
 *   evitando refetch desnecessário no cliente.
 *
 * Uso:
 *   const { displayPrice, installmentPrice, priceInCents, loading } = useProductPrice()
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Configuração Shopify ─────────────────────────────────────────────────────
const SHOPIFY_DOMAIN = 'muud-9850.myshopify.com'
const SHOPIFY_TOKEN = '852e9a0118f7b535ffc24ff7ad6c8fbd'
const SHOPIFY_API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-04/graphql.json`
const MERCHANDISE_ID = 'gid://shopify/ProductVariant/45404886237363'

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

// ─── Formatador de moeda ───────────────────────────────────────────────────────
function formatBRL(cents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100)
}

export function useProductPrice() {
  // ─── useState sincroniza servidor → cliente ──────────────────────────────────
  // O valor populado no SSR é serializado no HTML e reidratado no cliente,
  // então o usuário NUNCA vê o fallback hardcoded.
  const priceInCents = useState<number>('muud-calm-price', () => 0)

  // ─── useFetch: executa no SSR, cacheia no cliente ───────────────────────────
  // `key` único garante que o Nuxt não reexecute o fetch ao navegar entre páginas.
  const { pending } = useFetch<{ data: { node: { price: { amount: string } } } }>(
    SHOPIFY_API_URL,
    {
      key: 'shopify-muud-calm-price',  // chave de cache do Nuxt
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
      },
      body: { query: GQL_QUERY, variables: { id: MERCHANDISE_ID } },

      // `transform` extrai só o que precisamos da resposta antes de guardar
      transform(res) {
        const amount = parseFloat(res?.data?.node?.price?.amount ?? '0')
        // Popula o useState global — agora o cliente herdará este valor via SSR
        if (amount > 0) {
          priceInCents.value = Math.round(amount * 100)
        }
        return res
      },

      // Não refaz o fetch no cliente se o SSR já trouxe o dado
      getCachedData(key, nuxtApp) {
        return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
      },
    }
  )

  // ─── Computeds de exibição ────────────────────────────────────────────────────
  // Enquanto priceInCents === 0 (fallback vazio), mostramos o skeleton.
  // Assim que o fetch resolve (SSR ou cliente), o valor aparece já formatado.
  const loading = computed(() => pending.value || priceInCents.value === 0)

  const displayPrice = computed(() =>
    priceInCents.value > 0
      ? formatBRL(priceInCents.value)
      : 'R$ 84,90'   // fallback só se a API falhar de verdade
  )

  const installmentPrice = computed(() =>
    priceInCents.value > 0
      ? `ou 2x de ${formatBRL(Math.ceil(priceInCents.value / 2))} sem juros`
      : 'ou 2x de R$ 42,45 sem juros'
  )

  return {
    displayPrice,
    installmentPrice,
    priceInCents,
    loading,
  }
}

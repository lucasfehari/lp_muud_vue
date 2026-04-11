/**
 * useProductPrice.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Busca o preço real do MUUD Calm direto da Shopify Storefront API (GraphQL).
 * Compartilhado entre HomePitchSection (LP) e calm.vue (página de produto).
 *
 * Uso:
 *   const { displayPrice, installmentPrice, priceInCents, loading, error } = useProductPrice()
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Configuração Shopify ─────────────────────────────────────────────────────
const SHOPIFY_DOMAIN         = 'muud-9850.myshopify.com'
const SHOPIFY_TOKEN          = '852e9a0118f7b535ffc24ff7ad6c8fbd'
const SHOPIFY_API_URL        = `https://${SHOPIFY_DOMAIN}/api/2024-04/graphql.json`
const MERCHANDISE_ID         = 'gid://shopify/ProductVariant/45404886237363'

// ─── Cache singleton (reutiliza entre componentes sem re-fetch) ───────────────
const _priceInCents = ref<number | null>(null)
const _loading      = ref(false)
const _error        = ref(false)
let   _fetched      = false

export function useProductPrice() {
  // Formata centavos → "R$ 59,99"
  function formatBRL(cents: number) {
    return new Intl.NumberFormat('pt-BR', {
      style:    'currency',
      currency: 'BRL',
    }).format(cents / 100)
  }

  // Preço exibível (fallback para preço hardcoded se API falhar)
  const displayPrice = computed(() =>
    _priceInCents.value !== null
      ? formatBRL(_priceInCents.value)
      : 'R$ 59,99'
  )

  // Parcela (2x sem juros)
  const installmentPrice = computed(() =>
    _priceInCents.value !== null
      ? `ou 2x de ${formatBRL(Math.ceil(_priceInCents.value / 2))} sem juros`
      : 'ou 2x de R$ 29,99 sem juros'
  )

  // Expõe centavos brutos (útil para tracking e carrinho)
  const priceInCents = computed(() => _priceInCents.value ?? 5999)

  // ─── Fetch ────────────────────────────────────────────────────────────────
  async function fetchPrice() {
    if (_fetched) return   // não re-fetcha se já tiver dado
    _fetched      = true
    _loading.value = true
    _error.value   = false

    const query = `
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

    try {
      const res = await fetch(SHOPIFY_API_URL, {
        method:  'POST',
        headers: {
          'Content-Type':                       'application/json',
          'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
        },
        body: JSON.stringify({ query, variables: { id: MERCHANDISE_ID } }),
      })

      const { data, errors } = await res.json()

      if (errors?.length) throw new Error(errors[0].message)

      const amount = parseFloat(data?.node?.price?.amount ?? '0')
      if (amount > 0) {
        // Shopify retorna o valor em reais (ex: "59.99") — convertemos para centavos
        _priceInCents.value = Math.round(amount * 100)
      }
    } catch {
      _error.value = true
      // Mantém o fallback hardcoded já definido nos computed
    } finally {
      _loading.value = false
    }
  }

  // Inicia o fetch quando o composable é usado (apenas uma vez por sessão)
  onMounted(fetchPrice)

  return {
    displayPrice,
    installmentPrice,
    priceInCents,
    loading: _loading,
    error:   _error,
  }
}

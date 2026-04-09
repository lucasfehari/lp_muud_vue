<template>
  <!-- ─── OVERLAY ──────────────────────────────────────────────────────────── -->
  <Transition name="overlay">
    <div
      v-if="cart.isOpen.value"
      class="fixed inset-0 z-40 bg-[#1b1c1a]/40 backdrop-blur-[2px]"
      @click="cart.closeCart()"
    />
  </Transition>

  <!-- ─── DRAWER DO CARRINHO ────────────────────────────────────────────────
       Painel lateral que desliza da direita.
       Mobile: ocupa 100% da largura. Desktop: 420px fixo.
  ──────────────────────────────────────────────────────────────────────────── -->
  <Transition name="drawer">
    <div
      v-if="cart.isOpen.value"
      role="dialog"
      aria-modal="true"
      aria-label="Seu carrinho"
      class="
        fixed z-50 top-0 right-0 bottom-0
        w-full sm:w-[420px]
        bg-[#FDFAF7]
        flex flex-col
        border-l border-[#EBE8E0]
      "
    >

      <!-- ── Cabeçalho ──────────────────────────────────────────────────── -->
      <div class="flex items-center justify-between px-7 py-6 border-b border-[#EBE8E0]">
        <div class="flex items-center gap-3">
          <!-- Ícone carrinho -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#B48C57]">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span class="font-label text-[11px] tracking-[0.25em] uppercase text-[#1b1c1a] font-medium">
            Seu Carrinho
          </span>
          <!-- Badge com contagem -->
          <span
            v-if="cart.totalItems.value > 0"
            class="bg-[#B48C57] text-[#FDFAF7] font-label text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
          >
            {{ cart.totalItems.value }}
          </span>
        </div>

        <!-- Fechar -->
        <button
          id="cart-close-btn"
          class="w-8 h-8 flex items-center justify-center text-[#4f453a] hover:text-[#1b1c1a] transition-colors"
          @click="cart.closeCart()"
          aria-label="Fechar carrinho"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- ── Lista de itens ─────────────────────────────────────────────── -->
      <div class="flex-1 overflow-y-auto px-7 py-6">

        <!-- Carrinho vazio -->
        <div v-if="cart.items.length === 0" class="h-full flex flex-col items-center justify-center gap-4 text-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-[#D2C4B6]">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <p class="font-body text-[14px] text-[#A89A8E]">Seu carrinho está vazio.</p>
          <button
            class="font-label text-[10px] tracking-[0.2em] uppercase text-[#B48C57] hover:opacity-70 transition-opacity"
            @click="cart.closeCart()"
          >
            Continuar comprando
          </button>
        </div>

        <!-- Itens do carrinho -->
        <ul v-else class="space-y-5">
          <li
            v-for="item in cart.items"
            :key="item.merchandiseId"
            class="flex gap-4 pb-5 border-b border-[#EBE8E0] last:border-0"
          >
            <!-- Imagem -->
            <div class="w-20 h-20 bg-[#F5EDE8] shrink-0 flex items-center justify-center overflow-hidden">
              <img :src="item.imageUrl" :alt="item.name" class="w-full h-full object-contain p-2" />
            </div>

            <!-- Info do item -->
            <div class="flex-1 flex flex-col gap-2">
              <div class="flex justify-between items-start gap-2">
                <span class="font-headline text-[1rem] text-[#1b1c1a] leading-tight">{{ item.name }}</span>
                <!-- Remover item -->
                <button
                  :id="`remove-item-${item.merchandiseId}`"
                  class="shrink-0 text-[#A89A8E] hover:text-[#1b1c1a] transition-colors mt-0.5"
                  @click="cart.removeItem(item.merchandiseId)"
                  :aria-label="`Remover ${item.name}`"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>

              <!-- Preço formatado -->
              <span class="font-body text-[13px] text-[#7A756D]">
                {{ formatPrice(item.priceInCents) }} / un
              </span>

              <!-- Controle de quantidade -->
              <div class="flex items-center justify-between">
                <div class="flex items-center border border-[#D2C4B6]">
                  <button
                    :id="`decrease-${item.merchandiseId}`"
                    class="w-8 h-8 flex items-center justify-center text-[#4f453a] hover:bg-[#F5EDE8] transition-colors disabled:opacity-30"
                    :disabled="item.quantity <= 1"
                    @click="cart.setQuantity(item.merchandiseId, item.quantity - 1)"
                    :aria-label="`Diminuir quantidade de ${item.name}`"
                  >−</button>
                  <span class="w-8 h-8 flex items-center justify-center font-body text-[13px] text-[#1b1c1a] border-x border-[#D2C4B6]" aria-live="polite">
                    {{ item.quantity }}
                  </span>
                  <button
                    :id="`increase-${item.merchandiseId}`"
                    class="w-8 h-8 flex items-center justify-center text-[#4f453a] hover:bg-[#F5EDE8] transition-colors"
                    @click="cart.setQuantity(item.merchandiseId, item.quantity + 1)"
                    :aria-label="`Aumentar quantidade de ${item.name}`"
                  >+</button>
                </div>

                <!-- Subtotal do item -->
                <span class="font-body text-[14px] font-medium text-[#1b1c1a]">
                  {{ formatPrice(item.priceInCents * item.quantity) }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- ── Rodapé: Total + Checkout ──────────────────────────────────── -->
      <div v-if="cart.items.length > 0" class="px-7 py-6 border-t border-[#EBE8E0] space-y-5 bg-[#FDFAF7]">
        <!-- Total -->
        <div class="flex justify-between items-baseline">
          <span class="font-label text-[11px] tracking-[0.2em] uppercase text-[#4f453a]">Total</span>
          <span class="font-headline text-[1.6rem] text-[#1b1c1a]">{{ cart.formattedTotal.value }}</span>
        </div>

        <!-- Frete (informativo) -->
        <p class="font-body text-[12px] text-[#A89A8E] text-center">
          Frete calculado no checkout&nbsp;·&nbsp;Entrega discreta garantida
        </p>

        <!-- CTA Finalizar Compra -->
        <button
          id="checkout-btn"
          class="
            w-full py-4
            bg-[#B48C57] hover:bg-[#9E7A48] active:bg-[#8A6B3E]
            text-[#FDFAF7]
            font-label text-[11px] tracking-[0.35em] uppercase font-medium
            transition-all duration-300
            flex items-center justify-center gap-3
            disabled:opacity-60 disabled:cursor-not-allowed
          "
          :disabled="isCheckingOut"
          @click="handleCheckout"
        >
          <svg v-if="isCheckingOut" class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
          </svg>
          <span>{{ isCheckingOut ? 'Redirecionando...' : 'Finalizar Compra' }}</span>
        </button>

        <!-- Erro -->
        <p v-if="checkoutError" class="font-body text-[12px] text-red-500 text-center" role="alert">
          {{ checkoutError }}
        </p>
      </div>

    </div>
  </Transition>
</template>

<script setup lang="ts">
/**
 * CartDrawer.vue
 * ─────────────────────────────────────────────────────────────────────────────
 * Painel lateral do carrinho. Controlado pelo composable useCart().
 *
 * Ao clicar em "Finalizar Compra":
 *  1. Dispara eventos de tracking (Meta Pixel + Google Ads)
 *  2. Chama `cartCreate` na Shopify Storefront API com TODOS os itens
 *  3. Redireciona para o checkoutUrl retornado
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── CONFIGURAÇÃO SHOPIFY ─────────────────────────────────────────────────────
// ✅ Configuração ativa para muud-9850
const SHOPIFY_STORE_DOMAIN     = 'muud-9850.myshopify.com'
const SHOPIFY_STOREFRONT_TOKEN = '852e9a0118f7b535ffc24ff7ad6c8fbd'
const SHOPIFY_API_URL          = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-04/graphql.json`
// ─────────────────────────────────────────────────────────────────────────────

const cart = useCart()

const isCheckingOut = ref(false)
const checkoutError = ref('')

// ─── Formatar preço em BRL ────────────────────────────────────────────────────
function formatPrice(cents: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(cents / 100)
}

// ─── Tracking: InitiateCheckout ───────────────────────────────────────────────
// Disparado antes do redirect para garantir que os pixels recebam o evento.
function trackInitiateCheckout() {
  const totalValue = cart.totalCents.value / 100

  // Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', 'InitiateCheckout', {
      value:       totalValue,
      currency:    'BRL',
      num_items:   cart.totalItems.value,
      content_ids: cart.items.map((i) => i.merchandiseId),
    })
  }

  // Google Ads / GA4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'begin_checkout', {
      currency: 'BRL',
      value:    totalValue,
      items:    cart.items.map((i) => ({
        item_id:  i.merchandiseId,
        item_name: i.name,
        quantity:  i.quantity,
        price:     i.priceInCents / 100,
      })),
    })
  }
}

// ─── handleCheckout ───────────────────────────────────────────────────────────
// Cria carrinho na Shopify com todos os itens e redireciona para checkoutUrl.
// A mutation `cartCreate` aceita múltiplos `lines` (um por item do carrinho).
async function handleCheckout() {
  if (cart.items.length === 0) return

  isCheckingOut.value = true
  checkoutError.value = ''

  // 1. Tracking antes do redirect
  trackInitiateCheckout()

  // 2. Prepara os lines para a mutation (um objeto por item)
  const lines = cart.items.map((item) => ({
    merchandiseId: item.merchandiseId,
    quantity:      item.quantity,
  }))

  const mutation = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `

  try {
    const response = await fetch(SHOPIFY_API_URL, {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query: mutation, variables: { input: { lines } } }),
    })

    const { data, errors } = await response.json()

    if (errors?.length)                    throw new Error(errors[0].message)
    if (data?.cartCreate?.userErrors?.length) throw new Error(data.cartCreate.userErrors[0].message)

    const checkoutUrl = data?.cartCreate?.cart?.checkoutUrl
    if (!checkoutUrl) throw new Error('URL de checkout não encontrada.')

    // 3. Redirect para o checkout da Shopify
    window.location.href = checkoutUrl

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Erro desconhecido.'
    checkoutError.value = `Ops! ${message}`
    isCheckingOut.value = false
  }
}

// ─── Acessibilidade: fechar com Escape ───────────────────────────────────────
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && cart.isOpen.value) cart.closeCart()
}
onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

// ─── Travar scroll do body enquanto o drawer está aberto ─────────────────────
watch(
  () => cart.isOpen.value,
  (open) => { document.body.style.overflow = open ? 'hidden' : '' }
)
</script>

<style scoped>
/* Overlay */
.overlay-enter-active, .overlay-leave-active { transition: opacity 0.3s ease; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }

/* Drawer — desliza da direita */
.drawer-enter-active, .drawer-leave-active {
  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
}
.drawer-enter-from, .drawer-leave-to { transform: translateX(100%); }
</style>

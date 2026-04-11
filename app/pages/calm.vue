<template>
  <!-- ─── META / SEO ─────────────────────────────────────────────────────── -->
  <Head>
    <Title>MUUD Calm — Sistema de Ativação | MUUD Biotech</Title>
    <Meta name="description" content="MUUD Calm: fórmula botânica com Ashwagandha, L-Teanina e Passiflora para desacelerar nos momentos que importam. Caixa com 3 pirulitos funcionais." />
  </Head>

  <!-- ─── PÁGINA COMPLETA ────────────────────────────────────────────────── -->
  <div class="min-h-screen bg-[#FDFAF7] flex flex-col">

    <!-- ── NAVBAR MÍNIMA ─────────────────────────────────────────────────── -->
    <!-- CartDrawer agora é global em app.vue, removido daqui -->
    <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-5 bg-[#FDFAF7]/90 backdrop-blur-sm border-b border-[#EBE8E0]">
      <!-- Logo / Voltar -->
      <NuxtLink to="/" class="font-headline text-2xl text-[#1b1c1a] hover:opacity-70 transition-opacity">
        MUUD
      </NuxtLink>

      <!-- Ações da navbar: voltar + ícone carrinho -->
      <div class="flex items-center gap-5">
        <NuxtLink
          to="/"
          class="font-label text-[10px] uppercase tracking-[0.2em] text-[#4f453a] flex items-center gap-2 hover:text-[#B48C57] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Voltar
        </NuxtLink>

        <!-- Ícone do carrinho com badge de contagem -->
        <button
          id="navbar-cart-btn"
          class="relative flex items-center text-[#4f453a] hover:text-[#B48C57] transition-colors"
          @click="cart.openCart()"
          aria-label="Abrir carrinho"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <!-- Badge: aparece só quando há itens -->
          <Transition name="badge">
            <span
              v-if="cart.totalItems.value > 0"
              class="
                absolute -top-2 -right-2
                w-5 h-5 rounded-full
                bg-[#B48C57] text-[#FDFAF7]
                font-label text-[9px] font-bold
                flex items-center justify-center
              "
              aria-label="Itens no carrinho"
            >
              {{ cart.totalItems.value }}
            </span>
          </Transition>
        </button>
      </div>
    </nav>

    <!-- ── CONTEÚDO PRINCIPAL ────────────────────────────────────────────── -->
    <main class="flex-1 flex flex-col md:flex-row pt-[72px] md:pt-0">

      <!-- ── COLUNA ESQUERDA: Imagem ────────────────────────────────────── -->
      <div
        class="
          md:sticky md:top-0 md:h-screen
          md:w-[46%] shrink-0
          bg-[#F5EDE8]
          flex items-center justify-center
          p-10 md:p-16
          min-h-[50vw] md:min-h-0
          relative overflow-hidden
        "
      >
        <!-- Círculo decorativo de fundo -->
        <div class="absolute w-[500px] h-[500px] rounded-full bg-[#E8D8D0]/50 translate-y-8" />
        <!-- Gradiente sutil no canto inferior -->
        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ECD9D2]/30 to-transparent" />

        <img
          src="/assets/images/caixa_pirulito.png"
          alt="MUUD Calm — caixa com 3 pirulitos funcionais"
          class="relative z-10 w-full max-w-[320px] md:max-w-[380px] object-contain drop-shadow-sm"
        />
      </div>

      <!-- ── COLUNA DIREITA: Informações + Compra ───────────────────────── -->
      <div class="flex-1 flex items-center justify-center px-8 md:px-14 lg:px-20 py-16 md:py-24">
        <div class="w-full max-w-[520px] space-y-8">

          <!-- Label eyebrow -->
          <span class="font-label text-[10px] tracking-[0.3em] uppercase text-[#B48C57] font-medium">
            Sistema de Ativação
          </span>

          <!-- Nome + subtítulo -->
          <div class="space-y-3">
            <h1 class="font-headline text-[3rem] md:text-[3.6rem] leading-[1.05] text-[#1b1c1a] font-light">
              MUUD Calm
            </h1>
            <p class="font-body text-[16px] italic text-[#7A756D] font-light">
              Rituais de desaceleração para dias intensos
            </p>
          </div>

          <!-- Divisória -->
          <div class="w-10 h-px bg-[#D2C4B6]" />

          <!-- Descrição -->
          <p class="font-body text-[14px] md:text-[15px] text-[#716A62] leading-[1.8]">
            Uma fórmula botânica desenvolvida para apoiar sua resposta ao estresse diário.
            Ashwagandha, L-Teanina e Passiflora em uma caixa discreta com 3 pirulitos funcionais
            — para usar quando precisar, sem alterar sua rotina.
          </p>

          <!-- Ingredientes Ativos -->
          <div class="space-y-3">
            <span class="font-label text-[10px] tracking-[0.2em] uppercase text-[#4f453a] font-medium">
              Ingredientes Ativos
            </span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="ing in ingredients"
                :key="ing"
                class="font-body text-[12px] text-[#4f453a] border border-[#D2C4B6] px-3 py-1 rounded-full tracking-wide"
              >
                {{ ing }}
              </span>
            </div>
          </div>

          <!-- Divisória -->
          <div class="w-10 h-px bg-[#D2C4B6]" />

          <!-- Preço dinâmico via Shopify Storefront API -->
          <div class="flex items-baseline gap-2 flex-wrap">
            <span v-if="priceLoading" class="inline-block w-36 h-10 bg-[#EBE8E0] animate-pulse rounded" />
            <span v-else class="font-headline text-[2.4rem] text-[#1b1c1a]">{{ displayPrice }}</span>
            <span class="font-body text-[13px] text-[#7A756D]">/ caixa com 5 pirulitos</span>
          </div>

          <!-- Seletor de Quantidade -->
          <div class="flex items-center gap-5">
            <span class="font-label text-[11px] tracking-[0.15em] uppercase text-[#4f453a]">
              Quantidade
            </span>
            <div class="flex items-center border border-[#D2C4B6]">
              <button
                id="qty-decrease-btn"
                class="w-11 h-11 flex items-center justify-center text-[#4f453a] hover:bg-[#F5EDE8] transition-colors text-xl font-light disabled:opacity-30 disabled:cursor-not-allowed"
                :disabled="quantity <= 1"
                @click="quantity--"
                aria-label="Diminuir quantidade"
              >−</button>
              <span
                class="w-11 h-11 flex items-center justify-center font-body text-[15px] text-[#1b1c1a] border-x border-[#D2C4B6]"
                aria-live="polite"
              >{{ quantity }}</span>
              <button
                id="qty-increase-btn"
                class="w-11 h-11 flex items-center justify-center text-[#4f453a] hover:bg-[#F5EDE8] transition-colors text-xl font-light"
                @click="quantity++"
                aria-label="Aumentar quantidade"
              >+</button>
            </div>
          </div>

          <!-- ─── BOTÃO: Adicionar ao Carrinho ────────────────────────── -->
          <button
            id="add-to-cart-btn"
            class="
              w-full py-5
              bg-[#B48C57] hover:bg-[#9E7A48] active:bg-[#8A6B3E]
              text-[#FDFAF7]
              font-label text-[11px] tracking-[0.35em] uppercase font-medium
              transition-all duration-300
              flex items-center justify-center gap-3
            "
            @click="handleAddToCart"
          >
            <!-- Ícone carrinho no botão -->
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span>Adicionar ao Carrinho</span>
          </button>

          <!-- Micro-copy de confiança -->
          <p class="font-body text-[11px] text-[#A89A8E] text-center tracking-wide leading-relaxed">
            Entrega discreta&nbsp;·&nbsp;Produção limitada&nbsp;·&nbsp;Ingredientes premium
          </p>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
/**
 * calm.vue — Página de produto MUUD Calm
 * ─────────────────────────────────────────────────────────────────────────────
 * FLUXO:
 *  1. Usuário acessa /calm  →  pageview registrado pelo Pixel/GTM
 *  2. Clica em "Adicionar ao Carrinho"
 *     → dispara evento AddToCart (Pixel/GA4)
 *     → adiciona item ao estado global useCart()
 *     → CartDrawer abre automaticamente
 *  3. No CartDrawer, clica em "Finalizar Compra"
 *     → dispara InitiateCheckout
 *     → cartCreate na Shopify Storefront API
 *     → redirect para checkoutUrl
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Preço dinâmico da Shopify ─────────────────────────────────────────────
const { displayPrice, priceInCents, loading: priceLoading } = useProductPrice()

// ─── ID do variant Shopify ───────────────────────────────────────────────────
// ✅  ID capturado automaticamente da loja muud-9850
const MERCHANDISE_ID = 'gid://shopify/ProductVariant/45404886237363'

// ─── Estado local da página ───────────────────────────────────────────────────
const quantity    = ref(1)   // quantidade escolhida antes de adicionar
const cart        = useCart() // estado global compartilhado

const ingredients = [
  'Ashwagandha',
  'L-Teanina',
  'Passiflora',
  'Magnesium Glycinate',
  'CBD Broad-Spectrum',
]

// ─── Tracking: AddToCart ──────────────────────────────────────────────────────
function trackAddToCart() {
  const unitPrice = priceInCents.value / 100
  const value     = unitPrice * quantity.value

  // Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', 'AddToCart', {
      content_ids:  [MERCHANDISE_ID],
      content_name: 'MUUD Calm',
      content_type: 'product',
      value,
      currency:     'BRL',
      num_items:    quantity.value,
    })
  }

  // Google Ads / GA4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'add_to_cart', {
      currency: 'BRL',
      value,
      items: [{
        item_id:   'muud-calm',
        item_name: 'MUUD Calm',
        quantity:  quantity.value,
        price:     priceInCents.value / 100,
      }],
    })
  }
}

// ─── handleAddToCart ──────────────────────────────────────────────────────────
// Chamado ao clicar no botão "Adicionar ao Carrinho".
// Dispara tracking e adiciona o item ao carrinho global.
function handleAddToCart() {
  trackAddToCart()
  cart.addItem(
    {
      merchandiseId: MERCHANDISE_ID,
      name:          'MUUD Calm (5 un)',
      priceInCents:  priceInCents.value,
      imageUrl:      '/assets/images/caixa_pirulito.png',
    },
    quantity.value
  )
  // Reseta a quantidade da página para 1 após adicionar
  quantity.value = 1
}
</script>

<style scoped>
/* Animação do badge do carrinho na navbar */
.badge-enter-active, .badge-leave-active { transition: all 0.2s ease; }
.badge-enter-from, .badge-leave-to { opacity: 0; transform: scale(0.5); }
</style>

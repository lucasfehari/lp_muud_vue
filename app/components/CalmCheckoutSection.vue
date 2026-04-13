<template>
  <!--
    CalmCheckoutSection.vue — Seção de Checkout Final
    VISUAL: replica exatamente o estilo do CalmFooterCTASection original.
            Adiciona: preço dinâmico, texto "5 pirulitos", selos em destaque.
  -->
  <section id="checkout" class="py-32 px-8 bg-white text-center border-t border-[#EBE8E0]">
    <div class="max-w-3xl mx-auto space-y-12">

      <h2 class="uppercase font-headline text-4xl md:text-5xl leading-tight font-light text-[#1b1c1a]">
        Um ritual simples para ajustar o ritmo ao longo do dia.
      </h2>

      <!-- Card de oferta — mesmo estilo do original -->
      <div class="p-3 border border-[#EBE8E0] bg-[#FBF9F6] max-w-lg mx-auto flex flex-col items-center">
        <img src="/assets/images/caixa_pirulito.png" alt="MUUD Calm — 5 pirulitos funcionais" class="w-full h-auto object-contain" />

        <!-- Preço dinâmico — skeleton enquanto carrega -->
        <div v-if="loading" class="space-y-2 animate-pulse my-2">
          <div class="h-10 w-36 bg-[#EBE8E0] rounded mx-auto" />
          <div class="h-4 w-48 bg-[#EBE8E0] rounded mx-auto" />
        </div>
        <template v-else>
          <div class="text-[40px] font-headline text-[#1b1c1a] leading-none mb-1">
            {{ displayPrice }}
          </div>
          <p class="text-[14px] text-[#7A756D] mb-1 font-medium">
            {{ installmentPrice }}
          </p>
        </template>

        <p class="text-[12px] text-[#A89A8E] mb-2">Caixa com 5 pirulitos funcionais</p>
        <LinhaDivisao class="mb-0" />
        <!-- Botão nativo com o mesmo estilo visual do ButtonGradient -->
        <div class="pt-12">
          <button
            id="checkout-cta-btn"
            class="relative group overflow-hidden bg-gradient-to-r from-[#B08A53] via-[#D1B181] to-[#B08A53] text-white px-14 py-5 font-label text-[11px] font-bold tracking-[0.25rem] uppercase transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(176,138,83,0.5)] w-full"
            @click="handleAddToCart"
          >
            <span class="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">Comprar Agora</span>
          </button>
        </div>
      </div>

      <!-- ── Selos de Confiança — Alto destaque ── -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">

        <div class="flex items-center gap-4 border-2 border-[#1b1c1a] bg-[#1b1c1a] text-white px-6 py-5">
          <div class="w-10 h-10 rounded-full bg-[#B48C57]/20 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[#B48C57] text-xl">verified_user</span>
          </div>
          <div class="text-left">
            <p class="font-headline text-[0.95rem] leading-tight">Pagamento Seguro</p>
            <p class="font-body text-[11px] text-white/60 mt-0.5">Pix, cartão e boleto</p>
          </div>
        </div>

        <div class="flex items-center gap-4 border-2 border-[#1b1c1a] bg-[#1b1c1a] text-white px-6 py-5">
          <div class="w-10 h-10 rounded-full bg-[#B48C57]/20 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[#B48C57] text-xl">local_shipping</span>
          </div>
          <div class="text-left">
            <p class="font-headline text-[0.95rem] leading-tight">Entrega para todo Brasil</p>
            <p class="font-body text-[11px] text-white/60 mt-0.5">Rastreamento incluso</p>
          </div>
        </div>

      </div>

      <p class="font-body text-[11px] text-[#A89A8E] text-center tracking-wide">
        Entrega discreta&nbsp;·&nbsp;Produção limitada&nbsp;·&nbsp;Ingredientes premium
      </p>

    </div>
  </section>
</template>

<script setup lang="ts">
// ID do variante Shopify — para tracking e para adicionar ao carrinho
const MERCHANDISE_ID = 'gid://shopify/ProductVariant/45404886237363'

// useProductPrice é o composable correto — compartilha o mesmo cache singleton
// com o HomePitchSection, então o fetch já foi feito quando chegamos aqui.
const { displayPrice, installmentPrice, priceInCents, loading } = useProductPrice()

// useCart é auto-importado pelo Nuxt (está em app/composables/useCart.ts)
const cart = useCart()

function handleAddToCart() {
  // Tracking Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', 'AddToCart', {
      content_ids:  [MERCHANDISE_ID],
      content_name: 'MUUD Calm',
      content_type: 'product',
      value:        priceInCents.value / 100,
      currency:     'BRL',
    })
  }
  // Tracking Google Ads / GA4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'add_to_cart', {
      currency: 'BRL',
      value:    priceInCents.value / 100,
      items: [{ item_id: 'muud-calm', item_name: 'MUUD Calm', quantity: 1, price: priceInCents.value / 100 }],
    })
  }
  cart.addItem(
    {
      merchandiseId: MERCHANDISE_ID,
      name:          'MUUD Calm (5 un)',
      priceInCents:  priceInCents.value,
      imageUrl:      '/assets/images/caixa_pirulito.png',
    },
    1
  )
}
</script>

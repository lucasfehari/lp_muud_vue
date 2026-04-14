<template>
  <section class="py-32 px-8 bg-white text-center">
    <div class="max-w-3xl mx-auto space-y-12">
      <h2 class="uppercase font-headline text-4xl md:text-5xl leading-tight font-light text-[#1b1c1a]">
        Um ritual simples para ajustar o ritmo ao longo do dia.
      </h2>
      
      <div class="p-3 border border-[#EBE8E0] bg-[#FBF9F6] max-w-lg mx-auto flex flex-col items-center">
        <img src="/assets/images/caixa_pirulito.png" alt="MUUD Calm" class="w-full h-auto object-contain" />
        <!-- Preço dinâmico via Shopify Storefront API -->
        <div class="text-[36px] font-headline text-[#1b1c1a] leading-none mb-1">
          <span v-if="loading" class="inline-block w-32 h-9 bg-[#EBE8E0] animate-pulse rounded" />
          <span v-else>{{ displayPrice }}</span>
        </div>
        <p class="text-[12px] text-[#9A938A] mb-8 font-medium">{{ installmentPrice }}</p>
        <LinhaDivisao class="mb-0" />
        <ButtonGradient text="Comprar Agora" link="/calm" :on-track="trackAddToWishlist" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { displayPrice, installmentPrice, loading } = useProductPrice()

/**
 * trackAddToWishlist — Disparado ao clicar no botão da LP (CalmFooterCTASection).
 *
 * Por quê "AddToWishlist"? O botão da landing page não adiciona ao carrinho
 * diretamente — ele navega para a página do produto. O evento correto da Meta
 * para esse comportamento (demonstrar interesse antes da compra) é AddToWishlist.
 * Isso alimenta o funil de retargeting com usuários que demonstraram intentão.
 */
function trackAddToWishlist() {
  // ── Meta Pixel ──────────────────────────────────────────────────────────────
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('trackCustom', 'CustomAddToWishlist', {
      content_name: 'MUUD Calm',
      content_ids:  ['muud-calm'],
      content_type: 'product',
      currency:     'BRL',
    })
  }

  // ── Google Tag Manager / DataLayer ──────────────────────────────────────────
  if (typeof window !== 'undefined') {
    ;(window as any).dataLayer = (window as any).dataLayer || [];
    ;(window as any).dataLayer.push({
      event: 'click_cta',
      currency: 'BRL',
      items: [{ item_id: 'muud-calm', item_name: 'MUUD Calm', quantity: 1 }],
    })
  }
}
</script>

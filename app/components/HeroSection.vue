<template>
  <section class="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-8 overflow-hidden bg-[#1b1c1a] pt-32 pb-16">
    <div>
      <img src="/assets/images/background_hero.png" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover opacity-40" />
    </div>
    
    <div class="relative z-10 max-w-5xl space-y-10 animate-fade-in-up">
      
      <!-- Micro-animation label -->
      <div>
        <label class="font-label text-[#E0C8A0] uppercase tracking-[0.4rem] text-[10px] font-bold block tracking-widest">
         Biotecnologia em forma de pirulitos funcionais
        </label>
        <div class="w-16 h-[2px] bg-[#C9A977] mx-auto mt-6 mb-8 rounded-full shadow-[0_0_10px_rgba(201,169,119,0.5)]"></div>
      </div>
      
      <!-- Main Headline with glowing drop shadow -->
      <h1 class="uppercase font-headline text-4xl md:text-6xl lg:text-[75px] leading-[1.1] text-white text-balance font-light drop-shadow-2xl">
       NÃO É UM PIRULITO!
      </h1>
      
      <!-- Elevated body text -->
      <p class="font-body text-[15px] md:text-[17px] text-white/80 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
        É um pirulito funcional que ajuda você a relaxar e se concentrar.
        <strong class="text-white font-medium mt-2 inline-block">Qual é o seu MUUD de hoje?</strong>
      </p>
      
      <!-- Modern Button with glow and hover 3D effect -->
      <!-- Modern Button with glow and hover 3D effect -->
      <ButtonGradient text="Começar pelo MUUD Calm" link="/calm" :on-track="trackAddToWishlist" />
      
      <!-- Scroll Indicator -->
      <div class="pt-24 flex flex-col items-center space-y-3 opacity-60">
         <span class="text-white font-label text-[8px] uppercase tracking-widest">Descobrir</span>
         <div class="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * trackAddToWishlist — HeroSection: CTA principal da LP.
 *
 * Primeiro ponto de contato do usuário com intenção de compra.
 * Disparar AddToWishlist aqui alimenta o tópico de auditoria
 * de funil desde o topo até o checkout.
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

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

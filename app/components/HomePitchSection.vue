<template>
  <section class="py-32 px-8 bg-[#FBF9F6] border-t border-[#EBE8E0] overflow-hidden">
    <div class="max-w-4xl mx-auto text-center space-y-10">
      <label class="font-label text-[#B08A53] uppercase tracking-[0.3em] text-[10px] font-bold">O PRIMEIRO PASSO</label>
      <h2 class="uppercase font-headline text-4xl md:text-6xl leading-tight font-light text-[#1b1c1a]">
        Comece pelo <span class="text-primary">MUUD Calm.</span>
      </h2>
      <p class="font-body text-[15px] md:text-[17px] text-[#7A756D] leading-relaxed max-w-2xl mx-auto">
        Para os momentos em que o dia acelera mais do que deveria.<br/>
        Um ajuste simples na sua rotina.
      </p>

      <!-- Container do Produto com Pirulito Animado -->
      <div class="relative max-w-[320px] mx-auto pt-8">
        <!-- Pirulito (atrás da caixa) -->
        <div class="absolute -right-4 top-1/2 -translate-y-1/2 w-26 h-26 z-0 animate-lollipop-peek opacity-90">
          <img src="/assets/images/pirulito.png" class="w-full h-full object-contain" alt="pirulito">
        </div>
        
        <!-- Imagem produto -->
        <div class="relative z-10">
          <img src="/assets/images/muudcalm_caixa.png" alt="MUUD Calm" class="w-full h-auto object-contain" />
        </div>
      </div>

      <div class="pt-8">
        <ButtonGradient />
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes peek {
  0%, 100% {
    transform: translate(0, -50%) rotate(0deg);
  }
  50% {
    transform: translate(45px, -60%) rotate(15deg);
  }
}

.animate-lollipop-peek {
  animation: peek 4s ease-in-out infinite;
}
</style>

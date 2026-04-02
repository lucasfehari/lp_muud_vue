<template>
  <section class="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-8 overflow-hidden bg-[#1b1c1a] pt-32 pb-16">
    
    
    <div class="relative z-10 max-w-5xl space-y-10 animate-fade-in-up">
      
      <!-- Micro-animation label -->
      <div>
        <label class="font-label text-[#E0C8A0] uppercase tracking-[0.4rem] text-[10px] font-bold block">
          BIOTECNOLOGIA EM FORMA DE BEM-ESTAR
        </label>
        <div class="w-16 h-[2px] bg-[#C9A977] mx-auto mt-6 mb-8 rounded-full shadow-[0_0_10px_rgba(201,169,119,0.5)]"></div>
      </div>
      
      <!-- Main Headline with glowing drop shadow -->
      <h1 class="font-headline text-5xl md:text-7xl lg:text-[85px] leading-[1.1] text-white text-balance font-light tracking-tight drop-shadow-2xl">
        Você não precisa <br class="hidden md:block"/> parar o seu dia. <br/>
        <span class="italic text-[#EDD7B3] font-normal tracking-normal drop-shadow-[0_0_25px_rgba(237,215,179,0.3)]">
          Só ajustar o seu ritmo.
        </span>
      </h1>
      
      <!-- Elevated body text -->
      <p class="font-body text-[15px] md:text-[17px] text-white/80 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
        MUUD acompanha você ao longo do dia — ajustando seu estado no momento certo.<br/>
        <strong class="text-white font-medium mt-2 inline-block">Qual é o seu MUUD de hoje?</strong>
      </p>
      
      <!-- Modern Button with glow and hover 3D effect -->
      <div class="pt-12">
        <NuxtLink to="/calm" class="relative group overflow-hidden bg-gradient-to-r from-[#B08A53] via-[#D1B181] to-[#B08A53] text-white px-14 py-5 font-label text-[11px] font-bold tracking-[0.25rem] uppercase transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(176,138,83,0.5)] inline-block">
          <span class="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">Começar pelo MUUD Calm</span>
        </NuxtLink>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="pt-24 flex flex-col items-center space-y-3 opacity-60">
         <span class="text-white font-label text-[8px] uppercase tracking-widest">Descobrir</span>
         <div class="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  </section>
</template>

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

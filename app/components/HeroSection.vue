<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden bg-[#1b1c1a]">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img alt="Hero background" class="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida/ADBb0uhgZ8hPhO3Itelbr0Dr0SEDqI_0Im7chUfYIlGCZh8B8eTiIoQNi-rZP8FQVdX6TRNY_j_nle2zIAlqSMEwa-vD2IDm0eruwGjcd4bffF1sAOuGMX2UwFsPFWEee5XmfKuEDIn_ycCj0Hy_P8Pc-n3lfT3bPbVboyIrljjlt8Z2Iuk-nMkC7ce4rPKo9fIztoMQQxe7RtJzC-9A4vqehOZBYlPGPbmjVlADTCO02C6OAC3E4KrDSdSc969MVYU-xyAp_bw57k8AWw"/>
      <!-- Soft gradient overlay integrating into the white of the next section -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-white"></div>
    </div>
    
    <div class="relative z-10 max-w-5xl space-y-10 mt-16 animate-fade-in-up">
      
      <!-- Micro-animation label -->
      <div>
        <label class="font-label text-[#E0C8A0] uppercase tracking-[0.4rem] text-[10px] font-bold block">
          BIOTECNOLOGIA EM FORMA DE BEM-ESTAR
        </label>
        <div class="w-16 h-[2px] bg-[#C9A977] mx-auto mt-6 mb-8 rounded-full shadow-[0_0_10px_rgba(201,169,119,0.5)]"></div>
      </div>
      
      <!-- Main Headline with glowing drop shadow -->
      <h1 class="font-headline text-5xl md:text-7xl lg:text-[85px] leading-[1.1] text-white text-balance font-light tracking-tight drop-shadow-2xl">
        O mundo exige <br class="hidden md:block"/> o seu máximo. <br/>
        <span class="italic text-[#EDD7B3] font-normal tracking-normal drop-shadow-[0_0_25px_rgba(237,215,179,0.3)]">
          Não enfrente ele no automático.
        </span>
      </h1>
      
      <!-- Elevated body text -->
      <p class="font-body text-[15px] md:text-[17px] text-white/80 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
        Sua rotina exige adaptação. <strong class="text-white font-medium">MUUD</strong> é a engenharia de bem-estar criada para os momentos em que você precisa de <span class="text-white border-b border-white/40 pb-0.5">foco afiado</span>, energia limpa ou calma isolada.
      </p>
      
      <!-- Modern Button with glow and hover 3D effect -->
      <div class="pt-12">
        <button class="relative group overflow-hidden bg-gradient-to-r from-[#B08A53] via-[#D1B181] to-[#B08A53] text-white px-14 py-5 font-label text-[11px] font-bold tracking-[0.25rem] uppercase transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(176,138,83,0.5)]">
          <span class="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">Assumir o Controle</span>
        </button>
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

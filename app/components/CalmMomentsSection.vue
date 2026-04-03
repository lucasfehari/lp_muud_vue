<template>
  <section class="pt-24 px-8 bg-[#FBF9F6] border-t border-[#EBE8E0] relative overflow-hidden">
    <div class="max-w-4xl mx-auto space-y-12 mb-12">
      <LinhaDivisao />
      <div class="text-center">
        <h2 class="uppercase font-headline text-3xl md:text-4xl text-[#1b1c1a] font-light">
          Funciona bem em <span class="text-primary">momentos como:</span>
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto relative z-10">
        <div class="flex items-center gap-4 bg-white p-6 border border-[#EBE8E0]">
          <span class="material-symbols-outlined text-[#B08A53] text-2xl">meeting_room</span>
          <p class="font-body text-[#1b1c1a] font-medium">Antes de reuniões</p>
        </div>
        <div class="flex items-center gap-4 bg-white p-6 border border-[#EBE8E0]">
          <span class="material-symbols-outlined text-[#B08A53] text-2xl">battery_charging_20</span>
          <p class="font-body text-[#1b1c1a] font-medium">Depois de um dia intenso</p>
        </div>
        <div class="flex items-center gap-4 bg-white p-6 border border-[#EBE8E0]">
          <span class="material-symbols-outlined text-[#B08A53] text-2xl">speed</span>
          <p class="font-body text-[#1b1c1a] font-medium">Quando tudo parece acelerado demais</p>
        </div>
        <div class="flex items-center gap-4 bg-white p-6 border border-[#EBE8E0]">
          <span class="material-symbols-outlined text-[#B08A53] text-2xl">self_improvement</span>
          <p class="font-body text-[#1b1c1a] font-medium">Momentos que você precisa se recompor<br/>e continuar</p>
        </div>
      </div>
    </div>
    
    <!-- Imagem na mão grudada no bottom com círculo de texto -->
    <div class="relative flex justify-center w-full">
      
      <!-- Círculo de texto rotativo -->
      <div class="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-auto z-0 opacity-10 select-none animate-spin-slow pointer-events-none">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <defs>
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text class="font-headline text-[7.5px] uppercase tracking-[0.2em] font-bold fill-[#1b1c1a]">
            <textPath xlink:href="#circlePath">
              MUUD CALM • BIOTECH MEETS WELLNESS • MUUD CALM • BIOTECH MEETS WELLNESS •
            </textPath>
          </text>
        </svg>
      </div>

      <!-- Imagem Principal -->
      <img src="/assets/images/muud_na_mao.png" class="relative z-10 max-w-[600px] w-full h-auto object-contain block drop-shadow-xl" alt="MUUD na mão" />
    </div>
  </section>
</template>

<style scoped>
@keyframes spin {
  from { transform: translate(-50%, 0) rotate(0deg); }
  to { transform: translate(-50%, 0) rotate(360deg); }
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
  /* sobrescrevendo translate do tailwind para manter centralizado na animação */
}
</style>

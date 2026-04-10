<template>
  <!--
    CalmMomentsSection.vue — Dobra 7: Momentos
    Layout: 4 cards em fileira horizontal única, maiores, lado a lado.
    Mobile: scroll horizontal. Desktop: 4 colunas iguais.
  -->
  <section class="py-24 px-8 bg-[#FBF9F6] border-t border-[#EBE8E0]">
    <div class="max-w-6xl mx-auto space-y-12">

      <LinhaDivisao />

      <div class="text-center">
        <h2 class="uppercase font-headline text-3xl md:text-4xl text-[#1b1c1a] font-light">
          Funciona bem em <span class="text-primary">momentos como:</span>
        </h2>
      </div>

      <!-- Mobile: grid 2×2 | Desktop: 4 colunas lado a lado -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="momento in momentos"
          :key="momento.titulo"
          class="
            flex flex-col items-center justify-center gap-4 md:gap-6
            bg-white border border-[#EBE8E0]
            p-6 md:p-10
            text-center min-h-[200px] md:min-h-[300px]
          "
        >
          <span class="material-symbols-outlined text-[#B08A53] text-4xl md:text-5xl">{{ momento.icone }}</span>
          <p class="font-body text-[14px] md:text-[17px] text-[#1b1c1a] font-medium leading-snug">
            {{ momento.titulo }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const momentos = [
  { icone: 'meeting_room',        titulo: 'Antes de reuniões' },
  { icone: 'battery_charging_20', titulo: 'Depois de um dia intenso' },
  { icone: 'speed',               titulo: 'Quando tudo parece acelerado demais' },
  { icone: 'self_improvement',    titulo: 'Momentos que você precisa se recompor e continuar' },
]
</script>

<style scoped>
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
</style>

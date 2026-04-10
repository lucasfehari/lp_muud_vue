<template>
  <!--
    CalmBenefitsSection.vue — Dobra 5: Selos
    VISUAL: padrão visual idêntico ao CalmMomentsSection original (bg-[#FBF9F6], bordas #EBE8E0, cards brancos).
    CONTEÚDO: 4 selos — Sugar Free, Gluten Free, Lactose Free, No Artificial Colors.
  -->
  <section class="py-24 px-8 bg-[#FBF9F6] border-t border-[#EBE8E0]">
    <div class="max-w-4xl mx-auto space-y-12">

      <LinhaDivisao />

      <div class="text-center space-y-4">
        <span class="font-label text-[10px] tracking-[0.3em] uppercase text-[#B48C57] font-medium">
          Fórmula Limpa
        </span>
        <h2 class="uppercase font-headline text-3xl md:text-4xl text-[#1b1c1a] font-light">
          Sem <span class="text-primary">o que você não precisa.</span>
        </h2>
      </div>

      <!-- Grid 2×2 mobile / 4 colunas desktop — mesmo padrão dos cards de momentos -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto relative z-10">
        <div
          v-for="selo in selos"
          :key="selo.label"
          class="flex flex-col items-center gap-4 bg-white p-6 border border-[#EBE8E0] text-center"
        >
          <!-- Ícone material symbol -->
          <span class="material-symbols-outlined text-[#B08A53] text-3xl">{{ selo.icone }}</span>
          <div>
            <p class="font-body text-[#1b1c1a] font-medium text-[13px]">{{ selo.label }}</p>
            <p class="font-body text-[#7A756D] text-[11px] mt-0.5">{{ selo.sub }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// 4 selos usando Material Symbols (já carregado no projeto)
const selos = [
  { label: 'Sugar Free',           sub: 'Sem açúcar adicionado',    icone: 'no_food' },
  { label: 'Gluten Free',          sub: 'Sem glúten',                icone: 'grain' },
  { label: 'Lactose Free',         sub: 'Sem lactose',               icone: 'no_drinks' },
  { label: 'No Artificial Colors', sub: 'Sem corantes artificiais',  icone: 'palette' },
]
</script>

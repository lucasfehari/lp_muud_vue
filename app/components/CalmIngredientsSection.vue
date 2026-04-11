<template>
  <!--
    CalmIngredientsSection.vue — Dobra 6: Ativos (Layout Órbita)
    VISUAL: mantém o fundo escuro original (#1b1c1a) que JÁ ESTAVA no design.
            Só altera a estrutura interna para o layout de órbita conforme briefing.
    CONTEÚDO: imagem central + 2 compostos à esquerda + 2 à direita.
  -->
  <section class="relative pt-32 pb-0 px-8 bg-[#1b1c1a] text-white overflow-hidden">
    <div class="max-w-5xl mx-auto">

      <!-- Cabeçalho — igual ao original -->
      <div class="text-center mb-20 space-y-6">
        <label class="font-label text-[#E0C8A0] uppercase tracking-[0.3em] text-[10px] font-bold">FÓRMULA LIMPA</label>
        <h2 class="uppercase font-headline text-4xl md:text-5xl font-light">
          O que tem no <span class="text-[#E0C8A0]">seu ritual.</span>
        </h2>
      </div>

      <!-- ── DESKTOP: Layout Órbita (3 colunas) ─────────────────────────── -->
      <div class="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 md:items-center">

        <!-- Esquerda: L-Theanina + Magnésio -->
        <div class="flex flex-col gap-12 items-end">
          <div v-for="comp in compostoLeft" :key="comp.nome" class="text-right space-y-2 border-t border-white/20 pt-6 max-w-[220px]">
            <h3 class="font-headline text-2xl text-[#E0C8A0]">{{ comp.nome }}</h3>
            <p class="font-body text-white/70 text-[14px] leading-relaxed">{{ comp.descricao }}</p>
          </div>
        </div>

        <!-- Centro: Imagem da mão segurando o produto — ancorada ao bottom -->
        <div class="relative flex justify-center px-6 self-end">
          <!-- Anéis decorativos (apenas linhas sutis) -->
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full border border-white/10" />
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full border border-white/5" />
          <img
            src="/assets/images/muud_na_mao.png"
            alt="Mão segurando o produto MUUD Calm"
            class="relative z-10 w-full max-w-[360px] object-contain drop-shadow-2xl"
            style="margin-bottom: -80px;"
          />
        </div>

        <!-- Direita: Melatonina + Aromas Naturais -->
        <div class="flex flex-col gap-12 items-start">
          <div v-for="comp in compostoRight" :key="comp.nome" class="text-left space-y-2 border-t border-white/20 pt-6 max-w-[220px]">
            <h3 class="font-headline text-2xl text-[#E0C8A0]">{{ comp.nome }}</h3>
            <p class="font-body text-white/70 text-[14px] leading-relaxed">{{ comp.descricao }}</p>
          </div>
        </div>

      </div>

      <!-- ── MOBILE: 2x2 ingredientes + imagem grudada no bottom ── -->
      <div class="flex flex-col items-center md:hidden">

        <!-- Grid 2x2 de ingredientes -->
        <div class="grid grid-cols-2 gap-x-6 gap-y-10 w-full mb-12">
          <div v-for="comp in todosCompostos" :key="comp.nome" class="space-y-2 border-t border-white/20 pt-5">
            <h3 class="font-headline text-xl text-[#E0C8A0]">{{ comp.nome }}</h3>
            <p class="font-body text-white/70 text-[13px] leading-relaxed">{{ comp.descricao }}</p>
          </div>
        </div>

        <!-- Imagem grudada no bottom -->
        <div class="relative w-full flex justify-center">
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full border border-white/10" />
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full border border-white/5" />
          <img
            src="/assets/images/muud_na_mao.png"
            alt="Mao segurando o produto MUUD Calm"
            class="relative z-10 w-full max-w-[300px] object-contain drop-shadow-2xl"
            style="margin-bottom: -80px;"
          />
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const compostoLeft = [
  { nome: 'L-Teanina',  descricao: 'Contribui para momentos de relaxamento e foco.' },
  { nome: 'Magnésio bisglicinato', descricao: 'Auxilia no funcionamento do organismo.' },
]

const compostoRight = [
  { nome: 'Melatonina',      descricao: 'Relacionada ao ritmo natural do corpo.' },
  { nome: 'Aromas naturais', descricao: 'Tornam o momento mais leve, presente e agradável.' },
]

const todosCompostos = [...compostoLeft, ...compostoRight]
</script>

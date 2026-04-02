<template>
  <section class="py-32 px-8 bg-surface-container">
    <div class="max-w-4xl mx-auto text-center space-y-10">
      <label class="font-label text-primary uppercase tracking-[0.3rem] text-[10px] font-bold">PRODUÇÃO LIMITADA</label>
      <h2 class="font-headline text-4xl md:text-5xl leading-tight font-light">
        Você não precisa viver no mesmo ritmo <span class="italic text-primary">o tempo todo.</span>
      </h2>
      <p class="font-body text-sm text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
        Enquanto você imagina como seria ter controle total sobre seu dia, os estoques da nossa primeira produção limitadíssima estão evaporando. A alta demanda por ingredientes da nossa pureza exige produções pequenas.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
        <!-- Kit 1 -->
        <div class="bg-[#FCFAF8] border border-[#B08A53] relative flex flex-col items-center text-center p-12 h-full">
          <div class="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-[#B08A53] px-6 py-2">
            <span class="text-white text-[9px] uppercase tracking-[0.2em] font-label font-bold">MAIS POPULAR</span>
          </div>
          
          <div class="mb-10">
            <label class="font-label text-[#B08A53] uppercase tracking-[0.3em] text-[9px] font-bold block mb-5 mt-4">O RITUAL COMPLETO</label>
            <h3 class="font-headline text-[32px] text-[#1b1c1a] leading-tight mb-5">Os 4 Estados</h3>
            <p class="font-body text-[13px] text-[#7A756D] leading-relaxed mx-auto max-w-[240px]">
              Não deixe pontas soltas. O kit para dominar 100%<br class="hidden sm:block"/> do seu dia.
            </p>
          </div>
          
          <div class="mt-auto w-full flex flex-col items-center">
            <div class="mb-8 flex flex-col items-center">
              <span class="text-[11px] text-[#A39D93] line-through mb-1">R$ 997</span>
              <div class="flex items-baseline gap-1 justify-center mb-1">
                <span class="font-headline text-2xl text-[#1b1c1a]">R$</span>
                <span class="font-headline text-[44px] text-[#1b1c1a] leading-none tracking-tight">697</span>
              </div>
              <span class="text-[11px] text-[#B08A53] font-body tracking-wide font-medium">Economia de R$ 300</span>
            </div>
            
            <button class="w-full bg-gradient-to-r from-[#B08A53] via-[#C9A977] to-[#B08A53] text-white py-4 font-label text-[10px] tracking-[0.2em] font-bold uppercase hover:brightness-110 transition-all shadow-sm">
              GARANTIR O KIT COMPLETO
            </button>
          </div>
        </div>

        <!-- Kit 2 -->
        <div class="bg-[#FCFAF8] border border-[#EBE8E0] relative flex flex-col items-center text-center p-12 h-full">
          <div class="mb-10">
            <label class="font-label text-[#B08A53] uppercase tracking-[0.3em] text-[9px] font-bold block mb-5 mt-6">A EXPERIÊNCIA ESPECÍFICA</label>
            <h3 class="font-headline text-[32px] text-[#1b1c1a] leading-tight mb-5">Escolha o Seu Estado</h3>
            <p class="font-body text-[13px] text-[#7A756D] leading-relaxed mx-auto max-w-[280px]">
              Se esse é o momento que você precisa ajustar,<br class="hidden sm:block"/> comece por ele.
            </p>
          </div>
          
          <div class="mt-auto w-full flex flex-col items-center">
            <div class="mb-8 flex flex-col items-center pt-5">
              <div class="flex items-baseline gap-1 justify-center mb-1">
                <span class="font-headline text-2xl text-[#1b1c1a]">R$</span>
                <span class="font-headline text-[44px] text-[#1b1c1a] leading-none tracking-tight">197</span>
              </div>
              <span class="text-[11px] text-[#7A756D] font-body tracking-wide">por unidade</span>
            </div>
            
            <button class="w-full border border-[#EBE8E0] text-[#1b1c1a] py-4 bg-transparent font-label text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-black/5 transition-all">
              ESCOLHER MEU MUUD
            </button>
          </div>
        </div>
      </div>
      <p class="pt-12 font-label text-[9px] text-on-surface-variant tracking-widest uppercase">Produção artesanal • Ingredientes premium • Entrega discreta</p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

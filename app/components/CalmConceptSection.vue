<template>
  <!--
    CalmConceptSection.vue — Dobra 2: Conceito
    VISUAL: segue o design system do site (fundo #FDFAF7, tipografia leve, bordas #EBE8E0).
    CONTEÚDO: "NÃO É UM PIRULITO! É um produto funcional..."
  -->
  <section class="py-24 px-8 bg-[#FDFAF7] border-t border-[#EBE8E0]">
    <div class="max-w-4xl mx-auto space-y-12">

      <LinhaDivisao />

      <div class="text-center space-y-6">
        <h2 class="uppercase font-headline text-3xl md:text-5xl text-[#1b1c1a] font-light leading-tight">
          Não é um pirulito!<br />
          <span class="text-primary">É um produto funcional.</span>
        </h2>
        <p class="font-body text-[16px] md:text-[17px] text-[#7A756D] max-w-2xl mx-auto leading-[1.9]">
          Criado para acompanhar diferentes momentos do seu dia. Uma forma
          prática de inserir bem-estar na rotina.
        </p>
      </div>

      <!-- Imagem centralizada da embalagem -->
      <div class="flex justify-center pt-4">
        <img
          src="/assets/images/caixa_pirulito.png"
          alt="MUUD Calm — caixa com 5 pirulitos funcionais"
          class="w-full max-w-[300px] md:max-w-[380px] object-contain drop-shadow-sm"
        />
      </div>

    </div>
  </section>
</template>

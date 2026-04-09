<template>
  <!--
    pages/index.vue — Landing page principal (rota "/")
    ─────────────────────────────────────────────────────────────────────────────
    Contém toda a estrutura que antes estava no app.vue:
    Navbar + todas as sections de produto + Footer.
    ─────────────────────────────────────────────────────────────────────────────
  -->
  <div>
    <AppNavbar />
    <main>
      <!-- Seção hero da landing -->
      <section id="inicio">
        <HeroSection />
      </section>

      <!-- Grid de produtos (card Calm linka para /calm) -->
      <section id="produtos">
        <ArsenalSection />
      </section>

      <!-- Pitch / conceito MUUD -->
      <section id="calm">
        <HomePitchSection />
      </section>

      <!-- Seções informativas do Calm (mantidas na landing para SEO e narrativa) -->
      <section id="comprar">
        <CalmHeroSection />
      </section>
      <CalmRoutineSection />
      <CalmMomentsSection />
      <CalmIngredientsSection />
      <CalmFooterCTASection />
    </main>
    <AppFooter />
  </div>
</template>

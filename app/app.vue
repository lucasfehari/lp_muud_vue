<template>
  <div>
    <AppNavbar />
    <main>
      <!-- Página 1 -->
      <section id="inicio">
        <HeroSection />
      </section>
      <section id="produtos">
        <ArsenalSection />
      </section>
      <section id="calm">
        <HomePitchSection />
      </section>

      <!-- Página 2: Calm -->
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

<script setup lang="ts">
</script>

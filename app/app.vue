<template>
  <!--
    app.vue — Raiz da aplicação Nuxt
    ─────────────────────────────────────────────────────────────────────────────
    Usa <NuxtPage /> para renderizar a página correta conforme a rota:
      - /       → pages/index.vue  (Landing page principal)
      - /calm   → pages/calm.vue   (Página de produto MUUD Calm)

    O <AppNavbar> e <AppFooter> aparecem na rota "/" via index.vue.
    O CartDrawer é renderizado aqui globalmente para ser acessível de qualquer página.
    ─────────────────────────────────────────────────────────────────────────────
  -->
  <div>
    <CartDrawer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
</script>

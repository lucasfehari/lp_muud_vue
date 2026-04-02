<template>
  <footer class="w-full px-8 py-24 bg-footer-bg text-center flex flex-col items-center">
    <div class="text-3xl font-headline tracking-[0.4em] text-white mb-16">MUUD</div>
    <div class="flex flex-wrap justify-center gap-10 mb-16">
      <a class="font-label text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors" href="#">PRODUTOS</a>
      <a class="font-label text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors" href="#">CIÊNCIA</a>
      <a class="font-label text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors" href="#">RITUAIS</a>
      <a class="font-label text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors" href="#">TERMOS</a>
      <a class="font-label text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors" href="#">PRIVACIDADE</a>
    </div>
    <div class="space-y-4">
      <p class="font-label text-[9px] tracking-[0.3em] text-white/30 uppercase font-bold">BIOTECH MEETS WELLNESS</p>
      <p class="font-body text-[9px] text-white/20 uppercase tracking-widest">© {{ new Date().getFullYear() }} MUUD. TODOS OS DIREITOS RESERVADOS.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-14 py-5 transition-all duration-500 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-[4px]">
    <div class="text-3xl font-headline tracking-[0.3em] text-white cursor-pointer hover:opacity-80 transition-opacity">
      MUUD
    </div>
    
    <div class="hidden md:flex items-center gap-10">
      <a class="relative text-white/80 hover:text-white transition-colors font-label uppercase tracking-[0.2em] text-[10px] font-bold group" href="#">
        Produtos
        <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C9A977] transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a class="relative text-white/80 hover:text-white transition-colors font-label uppercase tracking-[0.2em] text-[10px] font-bold group" href="#">
        Ciência
        <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C9A977] transition-all duration-300 group-hover:w-full"></span>
      </a>
      
      <!-- Modern Pill Button for CTA -->
      <a class="text-[#1b1c1a] bg-white/95 hover:bg-white backdrop-blur-md transition-all duration-300 font-label uppercase tracking-[0.2em] text-[10px] font-bold px-8 py-3.5 rounded-full ml-4 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5" href="#">
        Comprar
      </a>
    </div>
    
    <!-- Mobile Menu Icon -->
    <button class="md:hidden text-white/80 hover:text-white p-2">
      <span class="material-symbols-outlined text-3xl">menu</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
</script>

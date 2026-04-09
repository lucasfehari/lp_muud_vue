<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-14 py-5 transition-all duration-500 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-[4px]">
    <a href="#inicio" class="text-3xl font-headline text-on-primary cursor-pointer hover:opacity-80 transition-opacity no-underline">
      MUUD
    </a>
    
    <div class="hidden md:flex items-center gap-10">
      <a class="relative text-white/80 hover:text-white transition-colors font-label uppercase tracking-[0.2em] text-[10px] font-bold group" href="#produtos">
        Produtos
        <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C9A977] transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a class="relative text-white/80 hover:text-white transition-colors font-label uppercase tracking-[0.2em] text-[10px] font-bold group" href="#calm">
        MUUD Calm
        <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C9A977] transition-all duration-300 group-hover:w-full"></span>
      </a>
      
      <!-- CTA pill -->
      <NuxtLink to="/calm" class="text-[#1b1c1a] bg-white/95 hover:bg-white backdrop-blur-md transition-all duration-300 font-label uppercase tracking-[0.2em] text-[10px] font-bold px-8 py-3.5 rounded-full ml-4 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5 no-underline">
        Comprar
      </NuxtLink>

      <!-- Ícone do carrinho com badge de contagem (Exibido apenas na página de produto) -->
      <button
        v-if="route.path === '/calm'"
        id="home-navbar-cart-btn"
        class="relative flex items-center text-white/80 hover:text-white transition-colors ml-6"
        @click="cart.openCart()"
        aria-label="Abrir carrinho"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <!-- Badge dinâmica -->
        <Transition name="badge">
          <span
            v-if="cart.totalItems.value > 0"
            class="
              absolute -top-2 -right-2
              w-5 h-5 rounded-full
              bg-[#B48C57] text-[#FDFAF7]
              font-label text-[9px] font-bold
              flex items-center justify-center
            "
          >
            {{ cart.totalItems.value }}
          </span>
        </Transition>
      </button>
    </div>
    
    <!-- Mobile Menu Icon -->
    <button class="md:hidden text-white/80 hover:text-white p-2" @click="mobileOpen = !mobileOpen">
      <span class="material-symbols-outlined text-3xl">{{ mobileOpen ? 'close' : 'menu' }}</span>
    </button>

    <!-- Mobile dropdown -->
    <div v-if="mobileOpen" class="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-8 py-10 md:hidden">
      <a href="#inicio" class="text-white/80 font-label uppercase tracking-[0.2em] text-[11px] font-bold" @click="mobileOpen = false">Início</a>
      <a href="#produtos" class="text-white/80 font-label uppercase tracking-[0.2em] text-[11px] font-bold" @click="mobileOpen = false">Produtos</a>
      <a href="#calm" class="text-white/80 font-label uppercase tracking-[0.2em] text-[11px] font-bold" @click="mobileOpen = false">MUUD Calm</a>
      <NuxtLink to="/calm" class="text-white bg-[#B08A53] px-10 py-4 font-label text-[11px] font-bold tracking-[0.2em] uppercase no-underline" @click="mobileOpen = false">Comprar</NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
const cart = useCart()
const route = useRoute()
</script>

<style scoped>
.badge-enter-active, .badge-leave-active { transition: all 0.2s ease; }
.badge-enter-from, .badge-leave-to { opacity: 0; transform: scale(0.5); }
</style>

<script setup lang="ts">
// Props do botão
const props = defineProps<{
  /** Texto exibido no botão */
  text?: string
  /** Rota de destino do NuxtLink */
  link?: string
  /** Callback de tracking: chamado imediatamente antes da navegação */
  onTrack?: () => void
}>()

// Valores padrão para as props opcionais
const text  = computed(() => props.text  ?? 'Começar pelo MUUD Calm')
const link  = computed(() => props.link  ?? '/calm')

/** Executa o callback de tracking (se existir) antes do NuxtLink navegar */
function handleClick() {
  if (typeof props.onTrack === 'function') {
    props.onTrack()
  }
}
</script>

<template>  
      <!-- Modern Button with glow and hover 3D effect -->
      <div class="pt-12">
        <NuxtLink
          :to="link"
          class="relative group overflow-hidden bg-gradient-to-r from-[#B08A53] via-[#D1B181] to-[#B08A53] text-white px-14 py-5 font-label text-[11px] font-bold tracking-[0.25rem] uppercase transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(176,138,83,0.5)] inline-block no-underline"
          @click="handleClick"
        >
          <span class="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">{{ text }}</span>
        </NuxtLink>
      </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

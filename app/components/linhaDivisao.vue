<script setup lang="ts">
defineProps({
    className: {
        type: String,
        default: "flex items-center justify-center gap-4 w-full pt-3 pb-0" 
    }
})
</script>

<template>
  <div :class=className>
    <div class="flex-grow h-px bg-[#EBE8E0]"></div>
    <div class="flex-shrink-0">
      <img src="/assets/icones/SVG/star.svg" alt="MUUD Star" class="w-4 h-4 opacity-30 grayscale" />
    </div>
    <div class="flex-grow h-px bg-[#EBE8E0]"></div>
  </div>
</template>



<style scoped>
</style>
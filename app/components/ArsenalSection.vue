<template>
  <section class="py-32 px-8 bg-on-primary">

    <LinhaDivisao />
    <div class="max-w-7xl mx-auto space-y-20">
      <div class="text-center space-y-6">
        <h2 class="uppercase font-headline text-4xl md:text-5xl text-on-surface font-light">
          Seu dia muda. <span class="text-primary">Seu ritmo também.</span>
        </h2>
        <p class="font-body text-[15px] md:text-[17px] text-[#7A756D] leading-relaxed max-w-2xl mx-auto">
          MUUD organiza isso de forma simples:
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Product 1: Calm — link para página dedicada /calm -->
        <NuxtLink
          id="product-card-calm"
          to="/calm"
          class="
            bg-[#FBF9F6] border border-[#EBE8E0] flex flex-col h-full pb-8
            group transition-colors duration-300
            hover:border-[#B48C57]/40 no-underline
          "
          aria-label="Ver e comprar MUUD Calm"
        >
          <div class="relative overflow-hidden">
            <img
              alt="MUUD Calm"
              class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              src="/assets/images/muud_calm.jpeg"
            />
            <!-- Badge hover: "Ver produto" -->
            <div class="absolute inset-0 bg-[#B48C57]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="font-label text-[10px] tracking-[0.25em] uppercase text-[#4f453a] bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D2C4B6]">
                Ver produto
              </span>
            </div>
          </div>
          <div class="pt-8 flex flex-col items-center flex-grow text-center">
            <h3 class="font-headline text-3xl text-[#1b1c1a] mb-3">Calm</h3>
            <div class="w-6 h-px bg-[#7A98A1] mb-5"></div>
            <p class="font-body text-[14px] text-[#716A62] uppercase tracking-[0.2em] font-medium mt-auto">
              Acalmar
            </p>
          </div>
        </NuxtLink>

        <!-- Product 2: Focus -->
        <div class="bg-[#FBF9F6] border border-[#EBE8E0] flex flex-col h-full pb-8 group">
          <div class="w-full aspect-square bg-[#F5F3F0] flex items-center justify-center relative overflow-hidden">
            <!-- Circulo animado em breve -->
            <div class="absolute inset-0 flex items-center justify-center opacity-30 animate-spin-slow">
              <svg viewBox="0 0 100 100" class="w-3/4 h-3/4">
                <defs>
                  <path id="brevePath2" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text class="font-label text-[8px] uppercase tracking-[0.2em] font-bold fill-[#1b1c1a]">
                  <textPath xlink:href="#brevePath2">
                    EM BREVE • EM BREVE • EM BREVE • EM BREVE • 
                  </textPath>
                </text>
              </svg>
            </div>
            <span class="font-label text-[10px] uppercase tracking-[0.3em] text-[#1b1c1a] font-bold relative z-10">Lançamento</span>
          </div>
          <div class="pt-8 flex flex-col items-center flex-grow text-center">
            <h3 class="font-headline text-3xl text-[#1b1c1a] mb-3">Focus</h3>
            <div class="w-6 h-px bg-[#C49C65] mb-5"></div>
            <p class="font-body text-[14px] text-[#716A62] uppercase tracking-[0.2em] font-medium mt-auto">
              Focar
            </p>
          </div>
        </div>

        <!-- Product 3: Energy -->
        <div class="bg-[#FBF9F6] border border-[#EBE8E0] flex flex-col h-full pb-8 group">
          <div class="w-full aspect-square bg-[#F5F3F0] flex items-center justify-center relative overflow-hidden">
            <!-- Circulo animado em breve -->
            <div class="absolute inset-0 flex items-center justify-center opacity-30 animate-spin-slow">
              <svg viewBox="0 0 100 100" class="w-3/4 h-3/4">
                <defs>
                  <path id="brevePath3" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text class="font-label text-[8px] uppercase tracking-[0.2em] font-bold fill-[#1b1c1a]">
                  <textPath xlink:href="#brevePath3">
                    EM BREVE • EM BREVE • EM BREVE • EM BREVE • 
                  </textPath>
                </text>
              </svg>
            </div>
            <span class="font-label text-[10px] uppercase tracking-[0.3em] text-[#1b1c1a] font-bold relative z-10">Lançamento</span>
          </div>
          <div class="pt-8 flex flex-col items-center flex-grow text-center">
            <h3 class="font-headline text-3xl text-[#1b1c1a] mb-3">Energy</h3>
            <div class="w-6 h-px bg-[#DB8C5C] mb-5"></div>
            <p class="font-body text-[14px] text-[#716A62] uppercase tracking-[0.2em] font-medium mt-auto">
              Ativar
            </p>
          </div>
        </div>

        <!-- Product 4: Night -->
        <div class="bg-[#FBF9F6] border border-[#EBE8E0] flex flex-col h-full pb-8 group">
          <div class="w-full aspect-square bg-[#F5F3F0] flex items-center justify-center relative overflow-hidden">
            <!-- Circulo animado em breve -->
            <div class="absolute inset-0 flex items-center justify-center opacity-30 animate-spin-slow">
              <svg viewBox="0 0 100 100" class="w-3/4 h-3/4">
                <defs>
                  <path id="brevePath4" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text class="font-label text-[8px] uppercase tracking-[0.2em] font-bold fill-[#1b1c1a]">
                  <textPath xlink:href="#brevePath4">
                    EM BREVE • EM BREVE • EM BREVE • EM BREVE • 
                  </textPath>
                </text>
              </svg>
            </div>
            <span class="font-label text-[10px] uppercase tracking-[0.3em] text-[#1b1c1a] font-bold relative z-10">Lançamento</span>
          </div>
          <div class="pt-8 flex flex-col items-center flex-grow text-center">
            <h3 class="font-headline text-3xl text-[#1b1c1a] mb-3">Night</h3>
            <div class="w-6 h-px bg-[#697A91] mb-5"></div>
            <p class="font-body text-[14px] text-[#716A62] uppercase tracking-[0.2em] font-medium mt-auto">
              Desacelerar
            </p>
          </div>
        </div>
      </div>
      
      <!-- Section CTA -->
      <div class="pt-5 text-center">
        <ButtonGradient text="Conheça o MUUD Calm" link="/calm" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ArsenalSection não precisa mais de estado de drawer.
// O card Calm agora é um NuxtLink para a rota /calm.
</script>

<style scoped>
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin 15s linear infinite;
}
</style>

<template>
  <section class="claims-section">
    <div class="claims-inner">

      <label class="claims-label">Você merece o melhor</label>

      <h2 class="claims-title">
        Feito com <span class="claims-highlight">cuidado</span> e intenção
      </h2>

      <div class="claims-grid">

        <!-- Sugar Free -->
        <div class="claim-item" v-for="claim in claims" :key="claim.label">
          <div class="claim-icon-wrapper">
            <svg
              :viewBox="claim.viewBox"
              xmlns="http://www.w3.org/2000/svg"
              class="claim-svg"
              v-html="claim.svgContent"
            />
          </div>
          <span class="claim-label">{{ claim.label }}</span>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const claims = [
  {
    label: 'Sugar Free',
    viewBox: '0 0 80 80',
    svgContent: `
      <!-- cube / sugar icon -->
      <g fill="none" stroke="#B08A53" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- front face -->
        <path d="M20 35 L40 25 L60 35 L60 55 L40 65 L20 55 Z" />
        <!-- top face split -->
        <path d="M20 35 L40 45 L60 35" />
        <path d="M40 45 L40 65" />
        <!-- top-left rise -->
        <path d="M20 35 L20 55" />
        <!-- slash through -->
        <line x1="16" y1="14" x2="64" y2="66" stroke="#B08A53" stroke-width="2.8" />
      </g>
    `,
  },
  {
    label: 'Gluten Free',
    viewBox: '0 0 80 80',
    svgContent: `
      <!-- wheat / gluten icon -->
      <g fill="none" stroke="#B08A53" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- stem -->
        <line x1="40" y1="68" x2="40" y2="18" />
        <!-- grain pairs from bottom to top -->
        <path d="M40 60 Q28 54 26 44" />
        <path d="M40 60 Q52 54 54 44" />
        <path d="M40 50 Q28 44 27 34" />
        <path d="M40 50 Q52 44 53 34" />
        <path d="M40 40 Q29 34 29 24" />
        <path d="M40 40 Q51 34 51 24" />
        <!-- tip grain -->
        <path d="M40 30 Q35 22 37 18" />
        <path d="M40 30 Q45 22 43 18" />
        <!-- slash through -->
        <line x1="16" y1="14" x2="64" y2="66" stroke="#B08A53" stroke-width="2.8" />
      </g>
    `,
  },
  {
    label: 'Lactose Free',
    viewBox: '0 0 80 80',
    svgContent: `
      <!-- milk drop icon -->
      <g fill="none" stroke="#B08A53" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- drop shape -->
        <path d="M40 16 C40 16 22 36 22 50 C22 60.5 30.1 68 40 68 C49.9 68 58 60.5 58 50 C58 36 40 16 40 16 Z" />
        <!-- inner highlight curve -->
        <path d="M30 48 C30 44 34 38 38 34" stroke-width="2" />
        <!-- slash through -->
        <line x1="16" y1="14" x2="64" y2="66" stroke="#B08A53" stroke-width="2.8" />
      </g>
    `,
  },
  {
    label: 'No Artificial Colors',
    viewBox: '0 0 80 80',
    svgContent: `
      <!-- paint palette icon -->
      <g fill="none" stroke="#B08A53" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- palette body -->
        <path d="M18 42 C16 26 28 15 40 15 C54 15 64 25 64 38 C64 46 58 50 52 48 C47 46 46 52 40 54 C32 56 20 52 18 42 Z" />
        <!-- color dots -->
        <circle cx="30" cy="28" r="3.5" fill="#B08A53" stroke="none" />
        <circle cx="42" cy="23" r="3.5" fill="#B08A53" stroke="none" />
        <circle cx="53" cy="31" r="3.5" fill="#B08A53" stroke="none" />
        <circle cx="54" cy="42" r="3.5" fill="#B08A53" stroke="none" />
        <!-- thumb hole -->
        <circle cx="27" cy="44" r="4" />
        <!-- slash through -->
        <line x1="16" y1="14" x2="64" y2="66" stroke="#B08A53" stroke-width="2.8" />
      </g>
    `,
  },
]
</script>

<style scoped>
.claims-section {
  background: #FBF9F6;
  border-top: 1px solid #EBE8E0;
  padding: 72px 32px 80px;
}

.claims-inner {
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
}

.claims-label {
  display: block;
  font-family: var(--font-label, sans-serif);
  color: #B08A53;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 16px;
}

.claims-title {
  font-family: var(--font-headline, serif);
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 300;
  color: #1b1c1a;
  text-transform: uppercase;
  line-height: 1.15;
  margin-bottom: 56px;
}

.claims-highlight {
  color: #B08A53;
}

/* Grid dos ícones */
.claims-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  flex-wrap: wrap;
}

.claim-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  flex: 0 0 auto;
  transition: transform 0.3s ease;
}

.claim-item:hover {
  transform: translateY(-4px);
}

.claim-icon-wrapper {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.claim-svg {
  width: 72px;
  height: 72px;
}

.claim-label {
  font-family: var(--font-label, sans-serif);
  font-size: 11px;
  font-weight: 600;
  color: #B08A53;
  text-transform: none;
  letter-spacing: 0.02em;
}

/* Mobile */
@media (max-width: 480px) {
  .claims-grid {
    gap: 32px;
  }
  .claim-icon-wrapper,
  .claim-svg {
    width: 60px;
    height: 60px;
  }
}
</style>

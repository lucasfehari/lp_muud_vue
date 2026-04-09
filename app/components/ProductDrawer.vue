<template>
  <!-- ─── OVERLAY / BACKDROP ───────────────────────────────────────────── -->
  <Transition name="overlay">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 bg-[#1b1c1a]/40 backdrop-blur-[2px]"
      @click="close"
    />
  </Transition>

  <!-- ─── DRAWER ─────────────────────────────────────────────────────────
       Entra pela direita em desktop, sobe pelo bottom em mobile.
       Em desktop: painel lateral de 680px; em mobile: full-width bottom-sheet
  ──────────────────────────────────────────────────────────────────────── -->
  <Transition name="drawer">
    <div
      v-if="isOpen"
      role="dialog"
      aria-modal="true"
      :aria-label="`Comprar ${product.name}`"
      class="
        fixed z-50
        bottom-0 left-0 right-0
        md:bottom-auto md:top-0 md:right-0 md:left-auto
        md:h-full md:w-[680px]
        bg-[#FDFAF7]
        flex flex-col md:flex-row
        overflow-hidden
      "
    >

      <!-- ── COLUNA ESQUERDA: Imagem ──────────────────────────────────── -->
      <div
        class="
          md:w-[46%] shrink-0
          bg-[#F5EDE8]
          flex items-center justify-center
          p-8 md:p-12
          min-h-[240px] md:min-h-0 md:h-full
          relative overflow-hidden
        "
      >
        <!-- Círculo decorativo suave no fundo -->
        <div
          class="
            absolute w-[340px] h-[340px] rounded-full
            bg-[#E8D8D0]/50
          "
        />

        <img
          :src="product.imageUrl"
          :alt="product.name"
          class="relative z-10 w-full max-w-[260px] md:max-w-[300px] object-contain drop-shadow-sm"
        />

        <!-- Fechar (mobile: canto superior direito da imagem) -->
        <button
          id="drawer-close-btn"
          class="
            absolute top-4 right-4
            w-9 h-9 rounded-full
            bg-white/70 backdrop-blur-sm
            flex items-center justify-center
            text-[#4f453a] hover:text-[#1b1c1a]
            transition-colors
          "
          @click="close"
          aria-label="Fechar"
        >
          <!-- Ícone X minimalista -->
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- ── COLUNA DIREITA: Informações ─────────────────────────────── -->
      <div class="flex-1 overflow-y-auto px-8 md:px-10 py-10 md:py-14 flex flex-col gap-6">

        <!-- Label eyebrow -->
        <span class="font-label text-[10px] tracking-[0.25em] uppercase text-[#B48C57] font-medium">
          {{ product.label }}
        </span>

        <!-- Nome do produto em serif grande -->
        <div class="space-y-2">
          <h2 class="font-headline text-[2.4rem] md:text-[2.8rem] leading-[1.1] text-[#1b1c1a] font-light">
            {{ product.name }}
          </h2>
          <!-- Subtítulo em itálico leve -->
          <p class="font-body text-[15px] italic text-[#7A756D] font-light">
            {{ product.subtitle }}
          </p>
        </div>

        <!-- Linha divisória fina -->
        <div class="w-10 h-px bg-[#D2C4B6]" />

        <!-- Descrição -->
        <p class="font-body text-[14px] text-[#716A62] leading-[1.75]">
          {{ product.description }}
        </p>

        <!-- Ingredientes Ativos -->
        <div class="space-y-3">
          <span class="font-label text-[10px] tracking-[0.2em] uppercase text-[#4f453a] font-medium">
            Ingredientes Ativos
          </span>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="ingredient in product.ingredients"
              :key="ingredient"
              class="
                font-body text-[12px] text-[#4f453a]
                border border-[#D2C4B6]
                px-3 py-1 rounded-full
                tracking-wide
              "
            >
              {{ ingredient }}
            </span>
          </div>
        </div>

        <!-- Linha divisória fina -->
        <div class="w-10 h-px bg-[#D2C4B6]" />

        <!-- Preço -->
        <div class="flex items-baseline gap-2 flex-wrap">
          <span class="font-headline text-[2rem] text-[#1b1c1a]">
            {{ formattedPrice }}
          </span>
          <span class="font-body text-[13px] text-[#7A756D]">
            {{ product.priceNote }}
          </span>
        </div>

        <!-- Seletor de Quantidade -->
        <div class="flex items-center gap-4">
          <span class="font-label text-[11px] tracking-[0.15em] uppercase text-[#4f453a]">
            Quantidade
          </span>
          <div class="flex items-center border border-[#D2C4B6] rounded-sm overflow-hidden">
            <button
              id="qty-decrease-btn"
              class="
                w-10 h-10 flex items-center justify-center
                text-[#4f453a] hover:bg-[#F5EDE8]
                transition-colors text-lg font-light
                disabled:opacity-30 disabled:cursor-not-allowed
              "
              :disabled="quantity <= 1"
              @click="quantity--"
              aria-label="Diminuir quantidade"
            >
              −
            </button>
            <span
              class="w-10 h-10 flex items-center justify-center font-body text-[15px] text-[#1b1c1a] border-x border-[#D2C4B6]"
              aria-live="polite"
            >
              {{ quantity }}
            </span>
            <button
              id="qty-increase-btn"
              class="
                w-10 h-10 flex items-center justify-center
                text-[#4f453a] hover:bg-[#F5EDE8]
                transition-colors text-lg font-light
              "
              @click="quantity++"
              aria-label="Aumentar quantidade"
            >
              +
            </button>
          </div>
        </div>

        <!-- CTA Button -->
        <button
          id="add-to-cart-btn"
          class="
            w-full py-4
            bg-[#B48C57] hover:bg-[#9E7A48]
            text-[#FDFAF7]
            font-label text-[11px] tracking-[0.3em] uppercase font-medium
            transition-all duration-300
            flex items-center justify-center gap-3
            disabled:opacity-60 disabled:cursor-not-allowed
          "
          :disabled="isLoading"
          @click="handleBuyNow"
          aria-label="Comprar agora"
        >
          <!-- Spinner de loading minimalista -->
          <svg
            v-if="isLoading"
            class="animate-spin w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
          </svg>
          <span>{{ isLoading ? 'Redirecionando...' : 'Comprar Agora' }}</span>
        </button>

        <!-- Mensagem de erro -->
        <p
          v-if="errorMessage"
          class="font-body text-[13px] text-red-500 text-center"
          role="alert"
        >
          {{ errorMessage }}
        </p>

        <!-- Micro-copy de confiança -->
        <p class="font-body text-[11px] text-[#A89A8E] text-center tracking-wide leading-relaxed">
          Entrega discreta&nbsp;·&nbsp;Produção limitada&nbsp;·&nbsp;Ingredientes premium
        </p>

      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
/**
 * ProductDrawer.vue
 * ─────────────────────────────────────────────────────────────────────────────
 * Drawer/modal de produto com integração à Shopify Storefront API.
 *
 * Como funciona:
 *  1. Recebe as props `isOpen` e `product` do componente pai.
 *  2. Gerencia quantidade localmente.
 *  3. Ao clicar em "Comprar Agora", chama a mutation `cartCreate` na
 *     Storefront API e redireciona para o checkout URL retornado.
 *
 * Configure as variáveis SHOPIFY abaixo com seus dados reais.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── CONFIGURAÇÃO SHOPIFY ────────────────────────────────────────────────────
// Substitua pelos dados reais da sua loja Shopify.
const SHOPIFY_STORE_DOMAIN = 'sua-loja.myshopify.com'
const SHOPIFY_STOREFRONT_TOKEN = 'SEU_STOREFRONT_API_TOKEN_AQUI'
// Endpoint da Storefront API GraphQL
const SHOPIFY_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-04/graphql.json`
// ─────────────────────────────────────────────────────────────────────────────

// ─── TIPAGEM DO PRODUTO ───────────────────────────────────────────────────────
export interface ProductData {
  /** ID do variant no formato GID: gid://shopify/ProductVariant/XXXXXXXXX */
  merchandiseId: string
  /** Label acima do título (ex: "SISTEMA DE ATIVAÇÃO") */
  label: string
  /** Nome principal em serif */
  name: string
  /** Subtítulo em itálico */
  subtitle: string
  /** Parágrafo de descrição */
  description: string
  /** Lista de ingredientes ativos para as pills */
  ingredients: string[]
  /** Preço em centavos (ex: 12900 = R$129,00) */
  priceInCents: number
  /** Texto complementar ao preço (ex: "/ caixa com 3 pirulitos") */
  priceNote: string
  /** URL da imagem do produto */
  imageUrl: string
}

// ─── PROPS ───────────────────────────────────────────────────────────────────
const props = defineProps<{
  /** Controla visibilidade do drawer */
  isOpen: boolean
  /** Dados do produto a exibir */
  product: ProductData
}>()

// ─── EMITS ───────────────────────────────────────────────────────────────────
const emit = defineEmits<{
  /** Emitido quando o usuário fecha o drawer */
  (e: 'close'): void
}>()

// ─── ESTADO LOCAL ─────────────────────────────────────────────────────────────
const quantity = ref(1)      // Quantidade selecionada pelo usuário
const isLoading = ref(false)  // Controla estado de loading do botão CTA
const errorMessage = ref('')  // Mensagem de erro da API (se houver)

// ─── COMPUTED: Preço formatado em BRL ────────────────────────────────────────
const formattedPrice = computed(() => {
  // Converte centavos para reais e formata no padrão pt-BR
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(props.product.priceInCents / 100)
})

// ─── MÉTODOS ─────────────────────────────────────────────────────────────────

/** Fecha o drawer e reseta estado */
function close() {
  quantity.value = 1
  errorMessage.value = ''
  emit('close')
}

/**
 * Chama a mutation `cartCreate` na Shopify Storefront API.
 *
 * A mutation retorna um `checkoutUrl` que leva o usuário diretamente
 * para o checkout da Shopify com o item já no carrinho.
 *
 * Documentação: https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate
 */
async function handleBuyNow() {
  isLoading.value = true
  errorMessage.value = ''

  // A mutation GraphQL que cria um carrinho na Shopify
  const mutation = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `

  // Variáveis passadas para a mutation:
  // - merchandiseId: ID do variant do produto no formato GID
  // - quantity: quantidade selecionada pelo usuário
  const variables = {
    input: {
      lines: [
        {
          merchandiseId: props.product.merchandiseId,
          quantity: quantity.value,
        },
      ],
    },
  }

  try {
    const response = await fetch(SHOPIFY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Token público da Storefront API (não é o Admin token!)
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query: mutation, variables }),
    })

    const { data, errors } = await response.json()

    // Erros de rede/GraphQL genéricos
    if (errors?.length) {
      throw new Error(errors[0].message)
    }

    // Erros de validação da Shopify (ex: variant inválido)
    const userErrors = data?.cartCreate?.userErrors
    if (userErrors?.length) {
      throw new Error(userErrors[0].message)
    }

    // Sucesso: redireciona para o checkout da Shopify
    const checkoutUrl = data?.cartCreate?.cart?.checkoutUrl
    if (checkoutUrl) {
      // Redireciona o usuário para a página de checkout
      window.location.href = checkoutUrl
    } else {
      throw new Error('URL de checkout não encontrada.')
    }

  } catch (err: unknown) {
    // Captura qualquer erro e exibe para o usuário de forma amigável
    const message = err instanceof Error ? err.message : 'Erro desconhecido.'
    errorMessage.value = `Ops! Algo deu errado: ${message}`
    isLoading.value = false
  }
}

// ─── ACESSIBILIDADE: Fecha com Escape ────────────────────────────────────────
// Quando o drawer está aberto, pressionar Escape o fecha.
function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.isOpen) {
    close()
  }
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

// Travar scroll do body enquanto o drawer está aberto
watch(
  () => props.isOpen,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
    // Reseta quantidade ao abrir um novo produto
    if (open) {
      quantity.value = 1
      errorMessage.value = ''
    }
  }
)
</script>

<style scoped>
/* ─── TRANSIÇÃO DO OVERLAY ───────────────────────────────────────────────── */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* ─── TRANSIÇÃO DO DRAWER ────────────────────────────────────────────────── */
/* Mobile: desliza de baixo para cima */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateY(100%);
}

/* Desktop: desliza da direita para a esquerda */
@media (min-width: 768px) {
  .drawer-enter-from,
  .drawer-leave-to {
    transform: translateX(100%);
  }
}
</style>

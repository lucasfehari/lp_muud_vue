/**
 * composables/useCart.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Gerenciamento de estado global do carrinho.
 *
 * Usa um reactive() fora de qualquer componente (padrão "shared state" do Vue 3)
 * para que o estado persista entre componentes sem precisar do Pinia.
 *
 * Cada item do carrinho contém:
 *  - merchandiseId: ID do variant Shopify (GID)
 *  - name:          nome exibido
 *  - priceInCents:  preço unitário em centavos
 *  - quantity:      quantidade
 *  - imageUrl:      imagem do produto
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Tipagem de um item no carrinho ──────────────────────────────────────────
export interface CartItem {
  merchandiseId: string
  name:          string
  priceInCents:  number
  quantity:      number
  imageUrl:      string
}

// ─── Estado compartilhado (singleton reativo) ─────────────────────────────────
// O reactive() é instanciado UMA vez no módulo, fora de qualquer componente.
// Todos que chamam useCart() compartilham este mesmo objeto.
const state = reactive({
  items: [] as CartItem[],
  isOpen: false, // controla se o CartDrawer está visível
})

// ─── Composable público ───────────────────────────────────────────────────────
export function useCart() {

  // ── Adicionar item ─────────────────────────────────────────────────────────
  // Se o merchandiseId já existe no carrinho, apenas incrementa quantity.
  // Se não existe, insere um novo item com quantity = 1 (ou qty passado).
  function addItem(item: Omit<CartItem, 'quantity'>, qty = 1) {
    const existing = state.items.find(
      (i) => i.merchandiseId === item.merchandiseId
    )
    if (existing) {
      existing.quantity += qty
    } else {
      state.items.push({ ...item, quantity: qty })
    }
    // Abre automaticamente o drawer do carrinho ao adicionar
    state.isOpen = true
  }

  // ── Remover item completamente ─────────────────────────────────────────────
  function removeItem(merchandiseId: string) {
    const index = state.items.findIndex((i) => i.merchandiseId === merchandiseId)
    if (index !== -1) state.items.splice(index, 1)
  }

  // ── Alterar quantidade de um item ──────────────────────────────────────────
  // Se qty cair para 0, remove o item do carrinho.
  function setQuantity(merchandiseId: string, qty: number) {
    if (qty <= 0) {
      removeItem(merchandiseId)
      return
    }
    const item = state.items.find((i) => i.merchandiseId === merchandiseId)
    if (item) item.quantity = qty
  }

  // ── Limpar carrinho (após checkout bem-sucedido, por exemplo) ──────────────
  function clearCart() {
    state.items.splice(0, state.items.length)
  }

  // ── Abrir / fechar drawer ──────────────────────────────────────────────────
  function openCart()  { state.isOpen = true  }
  function closeCart() { state.isOpen = false }

  // ── Computed: total de itens (para o badge da navbar) ──────────────────────
  const totalItems = computed(() =>
    state.items.reduce((acc, i) => acc + i.quantity, 0)
  )

  // ── Computed: valor total em centavos ──────────────────────────────────────
  const totalCents = computed(() =>
    state.items.reduce((acc, i) => acc + i.priceInCents * i.quantity, 0)
  )

  // ── Computed: valor total formatado em BRL ─────────────────────────────────
  const formattedTotal = computed(() =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
      .format(totalCents.value / 100)
  )

  // Expõe somente o necessário — itens como readonly para evitar mutação direta
  return {
    items:          readonly(state.items),
    isOpen:         readonly(toRef(state, 'isOpen')),
    totalItems,
    totalCents,
    formattedTotal,
    addItem,
    removeItem,
    setQuantity,
    clearCart,
    openCart,
    closeCart,
  }
}

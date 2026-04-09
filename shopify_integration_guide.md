# Guia de Integração: Shopify Storefront API (Atualizado 2024/2025) 🚀

A Shopify modernizou o fluxo. O caminho mais rápido e recomendado hoje é através do canal **Headless**.

---

## 💡 Resolvendo o Problema do Email
Se o email de verificação não está chegando em `mktmuud@gmail.com`:
1. **Verifique todas as pastas**: Spam, Promoções e Social.
2. **Adicione à lista de permissões**: Adicione `no-reply@shopify.com` aos seus contatos.
3. **Link de Reenvio**: Acesse [Shopify Accounts](https://accounts.shopify.com/) e procure a opção "Verify Email".
4. **Altere temporariamente**: Se nada funcionar, tente trocar o email para um `@outlook.com` ou outro domínio apenas para receber o link, e depois volte para o Gmail.

---

## 1. O Novo Fluxo: Canal Headless (Recomendado)

Em vez de criar um "App Personalizado" manualmente, a Shopify agora usa o canal **Headless** para simplificar:

1. No seu painel Shopify, vá em **Canais de vendas** (Sales Channels).
2. Pesquise por **"Headless"** na barra de busca ou na App Store e instale-o.
3. Dentro do canal Headless, clique em **"Create storefront"** (Criar vitrine).
4. Dê um nome (ex: "Site Nuxt MUUD").
5. Você verá imediatamente o **Public access token** (Este é o seu `SHOPIFY_STOREFRONT_TOKEN`).
6. Clique na aba **Storefront API permissions** dentro desse canal para garantir que as opções `unauthenticated_read_product_listings`, `unauthenticated_write_cart` e `unauthenticated_write_checkouts` estejam marcadas.

> [!TIP]
> Este método é o padrão atual da Shopify para lojas que usam Nuxt/Next.js e evita ter que lidar com o "Dev Dashboard" complexo de apps públicos.

---

## 2. Usando o Dev Dashboard (Caso prefira criar um App)

Se a interface te jogou para o **Dev Dashboard**:
1. Clique em **Create an app**.
2. Escolha **Custom App**.
3. Em **API Configuration**, selecione **Storefront API scopes**.
4. Marque as permissões de leitura de produtos e escrita de checkout/carrinho.
5. Após instalar, copie o **Storefront access token** (localizado no final da página de credenciais).

---

## 3. Encontrar o Merchandise ID (GID)

1. No painel da Shopify, vá em **Produtos**.
2. Clique no produto **MUUD Calm**.
3. Na seção de **Variantes**, clique na variante.
4. O ID numérico está no **final da URL** do navegador.
   - Ex: `.../variants/1234567890`
5. No código, o ID completo será: `gid://shopify/ProductVariant/1234567890`

---

## 4. Onde colocar esses dados no código?

### Em `app/pages/calm.vue`:
```typescript
// Localize esta linha no final do arquivo:
const MERCHANDISE_ID = 'gid://shopify/ProductVariant/SEU_ID_AQUI'
```

### Em `app/components/CartDrawer.vue`:
```typescript
// Localize estas constantes no <script setup>:
const SHOPIFY_STORE_DOMAIN     = 'muud-biotech.myshopify.com' // Seu subdomínio real
const SHOPIFY_STOREFRONT_TOKEN = 'SEU_TOKEN_COPIADO_AQUI'
```

---

## 5. Fluxo de Tracking (Para o Gestor de Tráfego)
O site já está programado para enviar os dados nos momentos certos:
- **Ao Adicionar**: Evento `AddToCart`.
- **Ao abrir o Checkout**: Evento `InitiateCheckout`.
- **Na Shopify**: A finalização da compra é rastreada nativamente pelos pixels que você configurar dentro do painel **Configurações -> Checkout** da Shopify.

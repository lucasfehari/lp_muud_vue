// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'MUUD | BIOTECH MEETS WELLNESS',
      htmlAttrs: { lang: 'pt-BR', class: 'scroll-smooth' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/MUUD.svg'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
        }
      ],
      script: [
        // ─── Google Tag Manager ───────────────────────────────────────────────
        // Instalado no <head> para garantir que o GTM carregue antes de qualquer
        // interação do usuário. O ID GTM-WRWL94TJ é o container do cliente.
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRWL94TJ');`,
          type: 'text/javascript',
          tagPosition: 'head',
        },
        // ─── Meta Pixel ───────────────────────────────────────────────────────
        // Mantido aqui para disparar AddToCart, AddToWishlist etc. diretamente
        // via fbq() no código Vue, independente do GTM.
        {
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1309740697683232');
            fbq('track', 'PageView');
          `,
          type: 'text/javascript',
          tagPosition: 'head',
        }
      ],
      noscript: [
        // ─── GTM noscript (fallback sem JavaScript) ───────────────────────────
        // O Google exige este iframe logo após o <body> — o Nuxt injeta
        // os noscripts no início do body automaticamente.
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRWL94TJ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyOpen',
        },
        // ─── Meta Pixel noscript ──────────────────────────────────────────────
        {
          innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1309740697683232&ev=PageView&noscript=1" />',
          tagPosition: 'bodyOpen',
        }
      ]
    }
  }
})
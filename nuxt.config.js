export default {
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },
  env: {
    network: process.env.NETWORK,
    zilliqaRpcUrl: process.env.ZILLIQA_RPC_URL,
    TESTNET_MARKETPLACE: process.env.TESTNET_MARKETPLACE,
    MAINNET_MARKETPLACE: process.env.MAINNET_MARKETPLACE
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'revision-site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/breakpoint.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/sections', '~/components/icons', '~/components/base']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
}

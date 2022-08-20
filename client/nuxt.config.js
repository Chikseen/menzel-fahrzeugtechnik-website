export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'de'
    },
    title: 'Menzel Fahrzeugtechnik',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description_main', name: 'description', content: 'Homepage der KFZ Werkstatt Menzel Fahrzeugtechnik' },
      { hid: 'keywords_main', name: 'keywords', content: 'Menzel Fahrzeugtechnik, Werkstatt, Markkleeberg, Leipzig' },
      { hid: 'author_main', name: 'author', content: 'Tim Menzel' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-leaflet', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/device'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  server: {
    port: 8080,
  },

  env: {
    api: process.env.VUE_APP_API,
  },

  publicRuntimeConfig: {
    api: process.env.VUE_APP_API,
  },
}

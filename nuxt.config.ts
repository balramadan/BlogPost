// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@unocss/nuxt", "@pinia/nuxt", "nuxt-gtag", "@nuxt/ui"],
  // nitro: {
  //   routeRules: {
  //     '/api/**': {
  //       middleware: 'checkApiKey',
  //     }
  //   }
  // },
  unocss: {
    nuxtLayers: true,
  },
  gtag: {
    id: "G-458743548",
  },
  plugins: ['~/plugins/pinia.js'],
});

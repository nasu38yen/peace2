// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
  ],
  css: [
    '~/assets/css/main.css',
  ],

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})

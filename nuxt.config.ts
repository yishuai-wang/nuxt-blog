// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'pinceau/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@nuxt/devtools',
  ],
  pinceau: {
    preflight: 'antfu',
  },
})

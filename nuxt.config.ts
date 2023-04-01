// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/elements',
    '@nuxt-themes/typography',
  ],
  modules: [
    '@nuxt-themes/tokens',
    'pinceau/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@nuxt/devtools',
    '@nuxt/content',
  ],
  pinceau: {
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'material-ocean',
        light: 'light-plus',
      },
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
  components: [
    '~/components',
    {
      prefix: '',
      path: resolve('./components/app'),
      global: true,
    },
  ],
})

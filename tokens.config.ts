import { defineTheme } from 'pinceau'
import theme from '@nuxt-themes/tokens/config'

export default defineTheme({
  color: {
    // @ts-expect-error
    primary: theme.color.ruby,
  },
  elements: {
    backdrop: {
      filter: 'saturate(200%) blur(20px)',
      background: {
        initial: '#fffc',
        dark: '#091a28cc',
      },
    },
  },
  blog: {
    themes: {
      background: {
        static: {
          dark: '#091a28',
          light: '#fff',
        },
      },
      color: {
        static: {
          dark: '#ebf4f1',
          light: 'rgba(0, 0, 0, 80%)',
        },
      },

    },
  },
})

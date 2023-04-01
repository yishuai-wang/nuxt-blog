import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  rules: [
    [
      'els-backdrop-filter', {
        'backdrop-filter': '$dt(`elements.backdrop.filter`)',
      },
    ],
    [
      /els-b(\w)$/,
      ([_, w]) => {
        const positionMap: Record<string, string> = {
          t: 'top',
          b: 'bottom',
          l: 'left',
          r: 'right',
        }
        const prop = w ? `border-${positionMap[w]}` : 'border'
        return {
          [prop]: '1px solid $dt(`elements.border.primary.static`)',
        }
      },
    ],
    [
      'els-backdrop-color', {
        background: '$dt(`elements.backdrop.background`)',
      },
    ],
    [
      'post-grid-col',
      {
        'grid-template-columns': 'minmax(320px, 1fr) minmax(250px, 250px)',
      },
    ],
  ],
})

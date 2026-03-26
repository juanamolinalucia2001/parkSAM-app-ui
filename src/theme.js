import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        fibonacci: {
          sandCream: { value: '#FFF8E7' },
          algaeGreen: { value: '#A3B18A' },
          mossGreen: { value: '#588157' },
          sepiaBrown: { value: '#BC8F8F' },
          darkCoffee: { value: '#3E2723' },
          white: { value: '#FFFFFF' },
        },
        warning: {
          fg: { value: '#8A5B00' },
          surface: { value: 'rgba(255, 211, 106, 0.28)' },
          border: { value: 'rgba(138, 91, 0, 0.25)' },
        },
        danger: { fg: { value: '#DC2626' } },
      },
    },
    semanticTokens: {
      colors: {
        'app.bg': { value: '{colors.fibonacci.sandCream}' },
        'app.fg': { value: '{colors.fibonacci.darkCoffee}' },
        'app.muted': { value: 'rgba(62, 39, 35, 0.72)' },
        'app.headerBg': { value: '{colors.fibonacci.mossGreen}' },
        'app.headerFg': { value: '{colors.fibonacci.sandCream}' },
        'app.surface': { value: '{colors.fibonacci.white}' },
        'app.border': { value: 'rgba(62, 39, 35, 0.18)' },
        'app.inputBg': { value: '{colors.fibonacci.white}' },

        'accent.primary': { value: '{colors.fibonacci.mossGreen}' },
        'accent.cta': { value: '{colors.fibonacci.mossGreen}' },
        'accent.ctaHover': { value: '{colors.fibonacci.algaeGreen}' },
        'accent.heading': { value: '{colors.fibonacci.sepiaBrown}' },

        'metrics.freeBg': { value: '{colors.fibonacci.algaeGreen}' },
        'metrics.freeFg': { value: '{colors.fibonacci.darkCoffee}' },
        'metrics.occupiedBg': { value: '{colors.fibonacci.sepiaBrown}' },
        'metrics.occupiedFg': { value: '{colors.fibonacci.darkCoffee}' },
        'metrics.totalBg': { value: '{colors.fibonacci.white}' },
        'metrics.totalFg': { value: '{colors.fibonacci.darkCoffee}' },

        'warning.fg': { value: '{colors.warning.fg}' },
        'warning.surface': { value: '{colors.warning.surface}' },
        'warning.border': { value: '{colors.warning.border}' },

        'danger.fg': { value: '{colors.danger.fg}' },
      },
    },
  },
})

import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        circuitStone: { value: '#1A1A1B' },
        deepGeometry: { value: '#4D00FF' },
        fractalChlorophyll: { value: '#39FF14' },
        digitalSky: { value: '#00E5FF' },
        dataResin: { value: '#FFB800' },
      },
    },
  },
})

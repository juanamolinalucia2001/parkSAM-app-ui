import { Button, SimpleGrid } from '@chakra-ui/react'

export function EntryExitActions({ onIngreso, onEgreso, disabled }) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
      <Button
        onClick={onIngreso}
        disabled={disabled}
        size={{ base: 'lg', md: 'md' }}
        bg="accent.cta"
        color="app.headerFg"
        _hover={{ bg: 'accent.ctaHover' }}
        _disabled={{ opacity: 0.45, cursor: 'not-allowed' }}
      >
        Registrar Ingreso
      </Button>
      <Button
        onClick={onEgreso}
        disabled={disabled}
        size={{ base: 'lg', md: 'md' }}
        bg="accent.cta"
        color="app.headerFg"
        _hover={{ bg: 'accent.ctaHover' }}
        _disabled={{ opacity: 0.45, cursor: 'not-allowed' }}
      >
        Registrar Egreso
      </Button>
    </SimpleGrid>
  )
}

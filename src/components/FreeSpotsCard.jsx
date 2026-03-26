import { Card, Stat, Text, VStack } from '@chakra-ui/react'

export function FreeSpotsCard({ freeSpots, totalSpots }) {
  const occupiedSpots = Math.max(0, totalSpots - freeSpots)

  return (
    <Card.Root bg="app.surface" borderColor="app.border" borderWidth="1px" rounded="lg">
      <Card.Body p={{ base: 4, md: 5 }}>
        <VStack align="stretch" gap={2}>
          <Stat.Root>
            <Stat.Label color="app.muted">Lugares libres</Stat.Label>
            <Stat.ValueText
              color="accent.primary"
              fontSize={{ base: '5xl', md: '6xl' }}
              lineHeight="1"
              fontWeight="900"
            >
              {freeSpots}
            </Stat.ValueText>
            <Stat.HelpText color="app.muted">de {totalSpots}</Stat.HelpText>
          </Stat.Root>

          <Text color="app.fg" fontSize="sm">
            Ocupados: <Text as="span" fontWeight="700">{occupiedSpots}</Text> · Libres:{' '}
            <Text as="span" fontWeight="700">{freeSpots}</Text>
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}

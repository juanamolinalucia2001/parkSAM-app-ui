import { Card, Text, VStack } from '@chakra-ui/react'

export function MetricSquare({ title, value, bg, color }) {
  return (
    <Card.Root
      bg={bg}
      color={color}
      borderWidth="1px"
      borderColor="app.border"
      rounded="lg"
      aspectRatio="1 / 1"
    >
      <Card.Body p={{ base: 4, md: 5 }}>
        <VStack align="stretch" justify="space-between" h="full">
          <Text fontSize="sm" fontWeight="700" opacity={0.9}>
            {title}
          </Text>
          <Text fontSize={{ base: '4xl', md: '5xl' }} fontWeight="900" lineHeight="1">
            {value}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}

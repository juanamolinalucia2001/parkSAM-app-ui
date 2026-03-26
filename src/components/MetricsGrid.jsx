import { Box, Heading, VStack } from '@chakra-ui/react'
import { MetricsChart } from './MetricsChart.jsx'

export function MetricsGrid({ freeSpots, totalSpots }) {
  const occupiedSpots = Math.max(0, totalSpots - freeSpots)

  return (
    <VStack gap={{ base: 4, md: 6 }} align="stretch">
      <Box
        bg="metrics.freeBg"
        rounded="xl"
        p={{ base: 6, md: 8 }}
        textAlign="center"
        boxShadow="0 4px 12px rgba(163, 177, 138, 0.3)"
      >
        <Heading size="sm" color="metrics.freeFg" mb={3} opacity={0.8}>
          Lugares libres
        </Heading>
        <Heading size="4xl" color="metrics.freeFg">
          {freeSpots}
        </Heading>
      </Box>

      <Box
        rounded="lg"
        p={{ base: 4, md: 5 }}
        bg="metrics.totalBg"
        border="1px"
        borderColor="rgba(62, 39, 35, 0.1)"
      >
        <MetricsChart
          freeSpots={freeSpots}
          occupiedSpots={occupiedSpots}
          totalSpots={totalSpots}
        />
      </Box>
    </VStack>
  )
}

import { Box, HStack, VStack, Text } from '@chakra-ui/react'

export function MetricsChart({ freeSpots, occupiedSpots, totalSpots }) {
  const freePercent = totalSpots > 0 ? Math.round((freeSpots / totalSpots) * 100) : 0
  const occupiedPercent = 100 - freePercent

  const circumference = 2 * Math.PI * 45
  const freeOffset = circumference - (freePercent / 100) * circumference
  const occupiedOffset = circumference - (occupiedPercent / 100) * circumference

  return (
    <VStack gap={3} align="center">
      <svg width="140" height="140" viewBox="0 0 120 120" style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#E8E8E8"
          strokeWidth="12"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#A3B18A"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={freeOffset}
          strokeLinecap="round"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#BC8F8F"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={occupiedOffset}
          strokeLinecap="round"
          style={{
            transform: `rotate(${(freePercent * 3.6) / 2}deg)`,
            transformOrigin: '60px 60px',
          }}
        />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dy="0.3em"
          fontSize="24"
          fontWeight="700"
          fill="#3E2723"
          style={{ transform: 'rotate(90deg)', transformOrigin: '60px 60px' }}
        >
          {freePercent}%
        </text>
      </svg>

      <HStack gap={4} justify="center" fontSize="sm" color="#3E2723">
        <Box display="flex" alignItems="center" gap="1">
          <Box w="3" h="3" borderRadius="50%" bg="#A3B18A" />
          <Text>Libres: {freePercent}%</Text>
        </Box>
        <Box display="flex" alignItems="center" gap="1">
          <Box w="3" h="3" borderRadius="50%" bg="#BC8F8F" />
          <Text>Ocupados: {occupiedPercent}%</Text>
        </Box>
      </HStack>
    </VStack>
  )
}

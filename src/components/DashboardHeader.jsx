import { Box, Heading, HStack, Text } from '@chakra-ui/react'

export function DashboardHeader() {
  return (
    <Box
      as="header"
      px={{ base: 4, md: 6 }}
      py={{ base: 4, md: 5 }}
      bg="app.headerBg"
      color="app.headerFg"
    >
      <HStack justify="space-between" align="baseline" gap={4}>
        <Heading size={{ base: 'md', md: 'lg' }} color="app.headerFg">
          ParkSAM
        </Heading>
        <Text color="rgba(255, 248, 231, 0.85)" fontSize="sm">
          Dashboard
        </Text>
      </HStack>
    </Box>
  )
}

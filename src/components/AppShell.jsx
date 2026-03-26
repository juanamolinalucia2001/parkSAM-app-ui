import { Box, Container } from '@chakra-ui/react'

export function AppShell({ header, children }) {
  return (
    <Box minH="100vh" bg="app.bg" color="app.fg">
      {header}
      <Container
        py={{ base: 5, md: 8 }}
        px={{ base: 4, md: 6 }}
        maxW={{ base: 'container.sm', md: 'container.md' }}
      >
        {children}
      </Container>
    </Box>
  )
}

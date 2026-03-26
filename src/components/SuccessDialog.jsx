import { Dialog, Heading, Text, VStack, Button, Box } from '@chakra-ui/react'

export function SuccessDialog({ isOpen, plate, onClose }) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
      <Dialog.Content bg="app.surface" rounded="xl" boxShadow="0 20px 60px rgba(0, 0, 0, 0.3)">
        <Dialog.Body p={{ base: 6, md: 8 }}>
          <VStack gap={6} textAlign="center">
            <Box fontSize="4xl">✓</Box>

            <VStack gap={2}>
              <Heading size="lg" color="app.fg">
                ¡Ingresado con éxito!
              </Heading>
              <Text color="app.muted">Tu vehículo está registrado en el sistema</Text>
            </VStack>

            <Box
              bg="#A3B18A"
              rounded="lg"
              p={4}
              w="full"
              textAlign="center"
              boxShadow="0 4px 12px rgba(163, 177, 138, 0.3)"
            >
              <Text fontSize="sm" color="#3E2723" opacity={0.8} mb={2}>
                Patente
              </Text>
              <Heading size="xl" color="#3E2723" fontFamily="monospace" letterSpacing="0.1em">
                {plate}
              </Heading>
            </Box>

            <VStack gap={2} w="full" fontSize="sm" color="app.muted">
              <Text>📍 Se registró tu entrada al estacionamiento</Text>
              <Text>⏱️ Tienes el tiempo acordado para permanecer</Text>
              <Text>📲 Recibirás una notificación antes de vencerse</Text>
            </VStack>

            <Button size="lg" w="full" onClick={onClose} bg="#588157" color="white" fontWeight="700">
              Entendido
            </Button>
          </VStack>
        </Dialog.Body>
      </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

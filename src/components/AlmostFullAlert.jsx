import { Alert } from '@chakra-ui/react'

export function AlmostFullAlert({ show }) {
  if (!show) return null

  return (
    <Alert.Root
      status="warning"
      bg="fibonacci.algaeGreen"
      borderColor="app.border"
      borderWidth="1px"
      rounded="lg"
    >
      <Alert.Content>
        <Alert.Title color="app.fg" fontWeight="800">
          Estacionamiento casi lleno
        </Alert.Title>
        <Alert.Description color="app.fg">
          Quedan muy pocos lugares disponibles.
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}

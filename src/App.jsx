import { useMemo, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Field,
  Heading,
  HStack,
  Input,
  Stat,
  Text,
  VStack,
} from '@chakra-ui/react'
import { isValidArgentinePlate, normalizePlate } from './utils/validate.js'

function App() {
  const totalSpots = 120
  const [freeSpots, setFreeSpots] = useState(42)

  const [plate, setPlate] = useState('')
  const [plateTouched, setPlateTouched] = useState(false)

  const plateIsValid = useMemo(() => isValidArgentinePlate(plate), [plate])
  const plateIsInvalid = plateTouched && !plateIsValid

  const almostFullThreshold = Math.max(1, Math.floor(totalSpots * 0.1))
  const isAlmostFull = freeSpots <= almostFullThreshold

  function handleIngreso() {
    setPlateTouched(true)
    if (!plateIsValid) return
    setFreeSpots((current) => Math.max(0, current - 1))
    setPlate('')
    setPlateTouched(false)
  }

  function handleEgreso() {
    setPlateTouched(true)
    if (!plateIsValid) return
    setFreeSpots((current) => Math.min(totalSpots, current + 1))
    setPlate('')
    setPlateTouched(false)
  }

  return (
    <Box minH="100vh" bg="circuitStone" color="white">
      <Box as="header" bg="deepGeometry" px={{ base: 4, md: 8 }} py={5}>
        <Heading size="lg">Dashboard</Heading>
      </Box>

      <Container py={{ base: 6, md: 10 }}>
        <VStack align="stretch" gap={6}>
          <Box borderWidth="1px" borderColor="whiteAlpha.300" rounded="md" p={5}>
            <Stat.Root>
              <Stat.Label color="whiteAlpha.800">Lugares libres</Stat.Label>
              <Stat.ValueText color="fractalChlorophyll" fontSize="5xl" lineHeight="1" fontWeight="800">
                {freeSpots}
              </Stat.ValueText>
              <Stat.HelpText color="whiteAlpha.700">de {totalSpots}</Stat.HelpText>
            </Stat.Root>
          </Box>

          {isAlmostFull ? (
            <Text color="dataResin" fontWeight="700">
              Estacionamiento casi lleno
            </Text>
          ) : null}

          <Box borderWidth="1px" borderColor="whiteAlpha.300" rounded="md" p={5}>
            <Field.Root invalid={plateIsInvalid} required>
              <Field.Label color="whiteAlpha.800">Patente</Field.Label>
              <Input
                value={plate}
                onChange={(e) => setPlate(normalizePlate(e.target.value))}
                onBlur={() => setPlateTouched(true)}
                placeholder="AA123BB"
                autoComplete="off"
                maxLength={7}
                bg="blackAlpha.400"
                borderColor="whiteAlpha.300"
              />
              {plateIsInvalid ? (
                <Field.ErrorText>
                  Patente inválida. Formatos válidos: AAA123, AA123BB, A123BCD.
                </Field.ErrorText>
              ) : (
                <Field.HelperText color="whiteAlpha.700">
                  Formatos: AAA123 / AA123BB / A123BCD
                </Field.HelperText>
              )}
            </Field.Root>

            <HStack mt={5} gap={3} flexWrap="wrap">
              <Button
                bg="digitalSky"
                color="black"
                _hover={{ bg: 'digitalSky' }}
                onClick={handleIngreso}
              >
                Registrar Ingreso
              </Button>
              <Button
                bg="digitalSky"
                color="black"
                _hover={{ bg: 'digitalSky' }}
                onClick={handleEgreso}
              >
                Registrar Egreso
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default App

import { useMemo, useState } from 'react'
import { Button, VStack } from '@chakra-ui/react'
import {
  isValidArgentinePlate,
  isValidContact,
  isValidStayHours,
} from './utils/validate.js'
import {
  AppShell,
  DashboardHeader,
  MetricsGrid,
  IngresoDialog,
  SuccessDialog,
} from './components/index.js'

function App() {
  const totalSpots = 120
  const [freeSpots, setFreeSpots] = useState(42)

  const [isIngresoOpen, setIsIngresoOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [lastPlate, setLastPlate] = useState('')

  const [plate, setPlate] = useState('')
  const [stayHours, setStayHours] = useState('')
  const [contact, setContact] = useState('')

  const [touched, setTouched] = useState({ plate: false, stayHours: false, contact: false })

  const plateIsValid = useMemo(() => isValidArgentinePlate(plate), [plate])

  const stayHoursIsValid = useMemo(() => isValidStayHours(stayHours), [stayHours])
  const contactIsValid = useMemo(() => isValidContact(contact), [contact])

  const plateIsInvalid = touched.plate && !plateIsValid
  const stayHoursIsInvalid = touched.stayHours && !stayHoursIsValid
  const contactIsInvalid = touched.contact && !contactIsValid

  const formIsValid = plateIsValid && stayHoursIsValid && contactIsValid

  function resetForm() {
    setPlate('')
    setStayHours('')
    setContact('')
    setTouched({ plate: false, stayHours: false, contact: false })
  }

  function openIngreso() {
    setIsIngresoOpen(true)
  }

  function cancelIngreso() {
    setIsIngresoOpen(false)
    resetForm()
  }

  function submitIngreso() {
    setTouched({ plate: true, stayHours: true, contact: true })
    if (!formIsValid) return
    setFreeSpots((current) => Math.max(0, current - 1))
    setLastPlate(plate)
    setIsIngresoOpen(false)
    setIsSuccessOpen(true)
    resetForm()
  }

  function closeSuccess() {
    setIsSuccessOpen(false)
    setLastPlate('')
  }

  return (
    <AppShell header={<DashboardHeader />}>
      <VStack align="stretch" gap={{ base: 4, md: 6 }}>
        <MetricsGrid freeSpots={freeSpots} totalSpots={totalSpots} />

        <Button
          size="lg"
          onClick={openIngreso}
          disabled={freeSpots <= 0}
          bg="#8B5CF6"
          color="white"
          fontWeight="700"
          _hover={{ bg: '#9F7AEA', transform: 'translateY(-2px)', boxShadow: '0 8px 20px rgba(139, 92, 246, 0.4)' }}
          _active={{ transform: 'translateY(0px)' }}
          _disabled={{ opacity: 0.5, cursor: 'not-allowed' }}
          transition="all 0.3s ease"
        >
          Ingresar
        </Button>

        <IngresoDialog
          isOpen={isIngresoOpen}
          plate={plate}
          stayHours={stayHours}
          contact={contact}
          onPlateChange={setPlate}
          onStayHoursChange={setStayHours}
          onContactChange={setContact}
          plateIsInvalid={plateIsInvalid}
          stayHoursIsInvalid={stayHoursIsInvalid}
          contactIsInvalid={contactIsInvalid}
          onTouchPlate={() => setTouched((t) => ({ ...t, plate: true }))}
          onTouchStayHours={() => setTouched((t) => ({ ...t, stayHours: true }))}
          onTouchContact={() => setTouched((t) => ({ ...t, contact: true }))}
          onSubmit={submitIngreso}
          onCancel={cancelIngreso}
          isFormValid={formIsValid}
        />

        <SuccessDialog isOpen={isSuccessOpen} plate={lastPlate} onClose={closeSuccess} />
      </VStack>
    </AppShell>
  )
}

export default App

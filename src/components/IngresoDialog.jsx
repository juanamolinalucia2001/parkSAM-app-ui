import { Dialog, Heading, VStack, Button, Field, Input } from '@chakra-ui/react'
import { normalizePlate } from '../utils/validate.js'

export function IngresoDialog({
  isOpen,
  plate,
  stayHours,
  contact,
  onPlateChange,
  onStayHoursChange,
  onContactChange,
  plateIsInvalid,
  stayHoursIsInvalid,
  contactIsInvalid,
  onTouchPlate,
  onTouchStayHours,
  onTouchContact,
  onSubmit,
  onCancel,
  isFormValid,
}) {
  return (
    <Dialog.Root open={isOpen} size="sm">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          bg="app.surface"
          rounded="xl"
          boxShadow="0 20px 60px rgba(0, 0, 0, 0.3)"
        >
        <Dialog.Header>
          <Heading size="md" color="app.fg">
            Registrar ingreso
          </Heading>
        </Dialog.Header>

        <Dialog.Body>
          <VStack align="stretch" gap={4}>
            <Field.Root invalid={plateIsInvalid} required>
              <Field.Label color="app.fg" fontWeight="700">
                Patente
              </Field.Label>
              <Input
                value={plate}
                onChange={(e) => onPlateChange(normalizePlate(e.target.value))}
                onBlur={onTouchPlate}
                placeholder="AA123BB"
                autoComplete="off"
                maxLength={7}
                bg="app.inputBg"
                borderColor="app.border"
                color="app.fg"
                _placeholder={{ color: 'app.muted' }}
                _focusVisible={{ borderColor: 'accent.primary' }}
              />
              {plateIsInvalid ? (
                <Field.ErrorText color="danger.fg" fontWeight="600">
                  Patente inválida. Formatos válidos: AAA123, AA123BB, A123BCD.
                </Field.ErrorText>
              ) : (
                <Field.HelperText color="app.muted">
                  Formatos: AAA123 / AA123BB / A123BCD
                </Field.HelperText>
              )}
            </Field.Root>

            <Field.Root invalid={stayHoursIsInvalid} required>
              <Field.Label color="app.fg" fontWeight="700">
                ¿Cuántas horas te vas a quedar?
              </Field.Label>
              <Input
                value={stayHours}
                onChange={(e) => onStayHoursChange(e.target.value)}
                onBlur={onTouchStayHours}
                placeholder="Ej: 2"
                inputMode="decimal"
                bg="app.inputBg"
                borderColor="app.border"
                color="app.fg"
                _placeholder={{ color: 'app.muted' }}
                _focusVisible={{ borderColor: 'accent.primary' }}
              />
              {stayHoursIsInvalid ? (
                <Field.ErrorText color="danger.fg" fontWeight="600">
                  Ingresá una duración válida (0.5 a 24 horas).
                </Field.ErrorText>
              ) : (
                <Field.HelperText color="app.muted">
                  Se usa para notificar si te pasás del tiempo.
                </Field.HelperText>
              )}
            </Field.Root>

            <Field.Root invalid={contactIsInvalid} required>
              <Field.Label color="app.fg" fontWeight="700">
                Contacto (mail o celular)
              </Field.Label>
              <Input
                value={contact}
                onChange={(e) => onContactChange(e.target.value)}
                onBlur={onTouchContact}
                placeholder="tu@mail.com o +54 9 11 1234-5678"
                autoComplete="off"
                bg="app.inputBg"
                borderColor="app.border"
                color="app.fg"
                _placeholder={{ color: 'app.muted' }}
                _focusVisible={{ borderColor: 'accent.primary' }}
              />
              {contactIsInvalid ? (
                <Field.ErrorText color="danger.fg" fontWeight="600">
                  Ingresá un mail o celular válido.
                </Field.ErrorText>
              ) : (
                <Field.HelperText color="app.muted">
                  Te avisamos si no salís del campus a tiempo.
                </Field.HelperText>
              )}
            </Field.Root>
          </VStack>
        </Dialog.Body>

        <Dialog.Footer>
          <VStack align="stretch" gap={2} w="full">
            <Button
              size="lg"
              onClick={onSubmit}
              disabled={!isFormValid}
              bg="#588157"
              color="white"
              fontWeight="700"
              _hover={{ bg: '#6B9B6D', transform: 'translateY(-2px)', boxShadow: '0 8px 20px rgba(88, 129, 87, 0.4)' }}
              _disabled={{ opacity: 0.5, cursor: 'not-allowed' }}
            >
              Confirmar ingreso
            </Button>
            <Button variant="outline" onClick={onCancel} size="lg">
              Cancelar
            </Button>
          </VStack>
        </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

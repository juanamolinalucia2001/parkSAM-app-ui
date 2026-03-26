import { Card, Field, Input, VStack } from '@chakra-ui/react'

export function PlateFieldCard({
  plate,
  onChange,
  onBlur,
  invalid,
  helperText,
  errorText,
}) {
  return (
    <Card.Root bg="app.surface" borderColor="app.border" borderWidth="1px" rounded="lg">
      <Card.Body p={{ base: 4, md: 5 }}>
        <VStack align="stretch" gap={4}>
          <Field.Root invalid={invalid} required>
            <Field.Label color="app.fg" fontWeight="700">
              Patente
            </Field.Label>
            <Input
              value={plate}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="AA123BB"
              autoComplete="off"
              maxLength={7}
              bg="app.inputBg"
              borderColor="app.border"
              color="app.fg"
              _placeholder={{ color: 'app.muted' }}
              _focusVisible={{ borderColor: 'accent.primary' }}
            />
            {invalid ? (
              <Field.ErrorText color="danger.fg" fontWeight="600">
                {errorText}
              </Field.ErrorText>
            ) : (
              <Field.HelperText color="app.muted">{helperText}</Field.HelperText>
            )}
          </Field.Root>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}

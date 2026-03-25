export function normalizePlate(input) {
  return String(input ?? '')
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
}

export const ARGENTINA_PLATE_REGEXES = [
  /^[A-Z]{3}[0-9]{3}$/,
  /^[A-Z]{2}[0-9]{3}[A-Z]{2}$/,
  /^[A-Z][0-9]{3}[A-Z]{3}$/,
]

export function isValidArgentinePlate(input) {
  const plate = normalizePlate(input)
  return ARGENTINA_PLATE_REGEXES.some((re) => re.test(plate))
}

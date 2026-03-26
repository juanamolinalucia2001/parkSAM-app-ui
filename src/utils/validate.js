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

export function normalizeContact(input) {
  return String(input ?? '').trim()
}

export function isValidEmail(input) {
  const value = normalizeContact(input)
  if (!value) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function normalizePhone(input) {
  return String(input ?? '')
    .trim()
    .replace(/[^0-9+]/g, '')
}

export function isValidPhone(input) {
  const value = normalizePhone(input)
  if (!value) return false
  // Lenient: supports AR numbers with optional +54 prefix.
  const digits = value.replace(/^\+/, '')
  if (!/^\d+$/.test(digits)) return false
  return digits.length >= 8 && digits.length <= 15
}

export function isValidContact(input) {
  return isValidEmail(input) || isValidPhone(input)
}

export function parseStayHours(input) {
  const raw = String(input ?? '').trim()
  if (!raw) return NaN
  const hours = Number(raw)
  return Number.isFinite(hours) ? hours : NaN
}

export function isValidStayHours(input, { min = 0.5, max = 24 } = {}) {
  const hours = parseStayHours(input)
  if (!Number.isFinite(hours)) return false
  return hours >= min && hours <= max
}

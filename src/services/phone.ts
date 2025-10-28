export function normalizePhone(input: string) {
  if (!input) return null
  const digits = input.replace(/\D/g, '')

  if (digits.length === 11 && digits.startsWith('01')) {
    return '+880' + digits.slice(1)
  }
  if (digits.length === 13 && digits.startsWith('880')) {
    return '+' + digits
  }

  return digits.startsWith('00')
    ? '+' + digits.slice(2)
    : digits.startsWith('+')
      ? digits
      : '+' + digits
}

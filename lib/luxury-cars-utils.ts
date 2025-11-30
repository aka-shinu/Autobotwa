/**
 * Format kilometers with comma separator
 */
export function formatKilometers(kms: number): string {
  return kms.toLocaleString('en-IN')
}

/**
 * Format year display
 */
export function formatYear(year: number): string {
  return year.toString()
}

/**
 * Generate WhatsApp link with pre-filled message
 */
export function getWhatsAppLink(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message)
  const cleanPhone = phone.replace(/\s+/g, '')
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`
}

/**
 * Format registration state code
 */
export function formatRegistrationState(state: string): string {
  return `${state} Regd.`
}

/**
 * Get default WhatsApp message for luxury car rental inquiry
 */
export function getDefaultWhatsAppMessage(carModel: string): string {
  return `Hello! I'm interested in renting the ${carModel}. Please provide more details about availability and rental terms.`
}

















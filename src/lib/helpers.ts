import md5 from 'blueimp-md5'

// Converts a string to a hash
export function hashString(str: string) {
  const lowercaseStr = str.toLowerCase()
  return md5(lowercaseStr)
}

export function getFirstWord(str: string) {
  const trimmedStr = str.trim()
  const spaceIndex = trimmedStr.indexOf(' ')
  if (spaceIndex === -1) {
    return trimmedStr
  }
  return trimmedStr.substring(0, spaceIndex)
}

export function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')
  return `${formattedMinutes} min ${formattedSeconds} sec`
}

export function slugify(str: string) {
  return str
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-') // separator
}

export function formatPhoneNumber(phoneNumber: string) {
  const cleaned = phoneNumber.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/)
  if (match) {
    const areaCode = match[1]
    if (areaCode === '04') {
      return `${phoneNumber.substring(0, 4)} ${phoneNumber.substring(
        4,
        8
      )} ${phoneNumber.substring(9, 12)}`
    }
    return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(
      2,
      6
    )} ${phoneNumber.substring(6)}`
  }
  return phoneNumber
}

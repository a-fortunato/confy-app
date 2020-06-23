export function getTimeString(date: Date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export function getDateString(date: Date) {
  return date.toLocaleDateString()
}

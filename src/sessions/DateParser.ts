import { Session } from './types'

export function getTimeString(date: Date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export function getDateString(date: Date) {
  return date.toLocaleDateString()
}

export const addSessionDates = (dates: string[], session: Session) => {
  const sessionStartDate = getDateString(session.startsAt)
  if (!dates.includes(sessionStartDate)) {
    dates.push(sessionStartDate)
  }
  return dates
}

export const mapSessionDates = session => ({
  ...session,
  startsAt: new Date(session.startsAt),
  endsAt: new Date(session.endsAt),
})

export const formatSessionsDatesAndSort = (sessions: Session[] = []) => {
  return sessions
    .map(mapSessionDates)
    .sort((a: Session, b: Session) => a.startsAt.getTime() - b.startsAt.getTime())
}

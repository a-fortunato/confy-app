import { Session } from '../types'

export function filterSessionsByDate(sessions: Session[], date: string) {
  return sessions.filter(session => session.date === date)
}

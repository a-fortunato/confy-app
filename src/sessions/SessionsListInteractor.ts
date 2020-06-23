import { getDateString } from './DateParser'
import { Session, Type } from './types'

export function filterSessionsByDate(sessions: Session[], date: string) {
  return sessions.filter(session => {
    return getDateString(session.startsAt) === date
  })
}

export function getSessionColor(types: Type[], sessionType: string): string {
  const selectedType = types.find(type => sessionType === type.name)
  return selectedType?.color
}

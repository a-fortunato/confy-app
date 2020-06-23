import { AnyAction } from 'redux'
import { getDateString } from '../DateParser'
import { Session, Type } from '../types'
import { GET_SESSIONS, GET_TYPES } from './action-types'

export interface SessionsState {
  dates: string[]
  sessions: Session[]
  types: Type[]
  loading: string[]
}

const initialState: SessionsState = {
  dates: [],
  sessions: [],
  types: [],
  loading: [],
}

function removeSimpleItem(array: string[], value: string): string[] {
  const index = array.indexOf(value)
  if (index > -1) {
    array.splice(index, 1)
  }
  return array
}

const addSessionDates = (dates: string[], session: Session) => {
  const sessionStartDate = getDateString(session.startsAt)
  if (!dates.includes(sessionStartDate)) {
    dates.push(sessionStartDate)
  }
  return dates
}

export default function reducer(state: SessionsState = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_SESSIONS: {
      if (!action.success && !action.error) {
        const loading = [...state.loading, GET_SESSIONS]
        return {
          ...state,
          loading,
        }
      } else if (action.error) {
        return {
          ...state,
          loading: [...removeSimpleItem(state.loading, GET_SESSIONS)],
        }
      } else {
        const sessions = (action.payload || [])
          .map(session => ({
            ...session,
            startsAt: new Date(session.startsAt),
            endsAt: new Date(session.endsAt),
          }))
          .sort((a: Session, b: Session) => a.startsAt.getTime() - b.startsAt.getTime())
        return {
          ...state,
          loading: [...removeSimpleItem(state.loading, GET_SESSIONS)],
          sessions,
          dates: sessions.reduce(addSessionDates, []),
        }
      }
    }
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      }
    default:
      return state
  }
}

import { AnyAction } from 'redux'
import { Attendee, Session, Speaker, Type, Venue } from '../types'
import { GET_ATTENDEES, GET_SESSIONS, GET_SPEAKERS, GET_TYPES, GET_VENUES } from './action-types'

interface State {
  dates: string[]
  sessions: Session[]
  venues: Venue[]
  speakers: Speaker[]
  attendees: Attendee[]
  types: Type[]
}

const initialState: State = {
  dates: [],
  sessions: [],
  venues: [],
  speakers: [],
  attendees: [],
  types: [],
}

export default function reducer(state: State = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_SESSIONS: {
      const sessions = action.payload || []
      return {
        ...state,
        sessions,
        dates: (sessions || []).reduce((dates: string[], session: Session) => {
          if (!dates.includes(session.date)) {
            dates.push(session.date)
          }
          return dates
        }, []),
      }
    }
    case GET_ATTENDEES:
      return {
        ...state,
        attendees: action.payload,
      }
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      }
    case GET_SPEAKERS:
      return {
        ...state,
        speakers: action.payload,
      }
    case GET_VENUES:
      return {
        ...state,
        venues: action.payload,
      }
    default:
      return state
  }
}

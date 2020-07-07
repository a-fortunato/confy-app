import { AnyAction } from 'redux'
import { Session, Type, Event } from '../types'
import { GET_EVENTS, GET_SESSIONS, GET_TYPES } from './action-types'

export interface SessionsState {
  sessions: Session[]
  types: Type[]
  loading: string[]
  event?: Event
}

const initialState: SessionsState = {
  sessions: [],
  types: [],
  loading: [],
  event: undefined,
}

function removeSimpleItem(array: string[], value: string): string[] {
  const index = array.indexOf(value)
  if (index > -1) {
    array.splice(index, 1)
  }
  return array
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
        const sessions = action.payload || []
        return {
          ...state,
          loading: [...removeSimpleItem(state.loading, GET_SESSIONS)],
          sessions,
        }
      }
    }
    case GET_EVENTS: {
      if (!action.success && !action.error) {
        const loading = [...state.loading, GET_EVENTS]
        return {
          ...state,
          loading,
        }
      } else if (action.error) {
        return {
          ...state,
          loading: [...removeSimpleItem(state.loading, GET_EVENTS)],
        }
      } else {
        console.log('event', action.payload)
        return {
          ...state,
          loading: [...removeSimpleItem(state.loading, GET_EVENTS)],
          event: action.payload,
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

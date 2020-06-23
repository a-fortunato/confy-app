import Config from '../../config'
import data from '../../tests/test_data.json'
import { GET_ATTENDEES, GET_SESSIONS, GET_SPEAKERS, GET_TYPES } from './action-types'

export const SESSIONS = '/sessions'
export const PEOPLE = '/people'
export const SPEAKERS = '/speakers'
export const TYPES = '/types'

export function getSessions() {
  return {
    type: GET_SESSIONS,
    meta: {
      offline: {
        effect: {
          url: Config.getRoute(SESSIONS),
          method: 'GET',
        },
        commit: {
          type: GET_SESSIONS,
          success: true,
        },
        rollback: {
          type: GET_SESSIONS,
          error: true,
        },
      },
    },
  }
}

export function getSpeakers() {
  return {
    type: GET_SPEAKERS,
    meta: {
      offline: {
        effect: {
          url: Config.getRoute(SPEAKERS),
        },
        commit: {
          type: GET_SPEAKERS,
          success: true,
        },
        rollback: {
          type: GET_SPEAKERS,
          error: true,
        },
      },
    },
  }
}

export function getAttendees() {
  return {
    type: GET_ATTENDEES,
    payload: data.attendees || [],
  }
}

export function getTypes() {
  return {
    type: GET_TYPES,
    meta: {
      offline: {
        effect: {
          url: Config.getRoute(TYPES),
        },
        commit: {
          type: GET_TYPES,
          success: true,
        },
        rollback: {
          type: GET_TYPES,
          error: true,
        },
      },
    },
  }
}

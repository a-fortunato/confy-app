import data from '../tests/test_data.json'
import { GET_ATTENDEES, GET_SESSIONS, GET_SPEAKERS, GET_TYPES, GET_VENUES } from './action-types'

export function getSessions() {
  return {
    type: GET_SESSIONS,
    payload: data.sessions || [],
  }
}

export function getVenues() {
  return {
    type: GET_VENUES,
    payload: data.venues || [],
  }
}

export function getSpeakers() {
  return {
    type: GET_SPEAKERS,
    payload: data.speakers || [],
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
    payload: data.types || [],
  }
}

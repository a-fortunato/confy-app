import { createSelector } from 'reselect'
import { addSessionDates, formatSessionsDatesAndSort } from '../DateParser'
import { SessionsState } from './reducer'

const sessionsSelector = (state: SessionsState) => state.sessions
export const formattedSessionsSelector = createSelector(
  sessionsSelector,
  formatSessionsDatesAndSort
)

const sessionsToDatesParser = sessions => sessions.reduce(addSessionDates, [])
export const datesSelector = createSelector(formattedSessionsSelector, sessionsToDatesParser)

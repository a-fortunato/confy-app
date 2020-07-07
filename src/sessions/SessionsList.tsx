import React, { useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
// import { useSafeArea } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import SessionOverview from './SessionOverview'
import { filterSessionsByDate } from './SessionsListInteractor'
import { getSessions, getTypes } from './redux/actions'
import { datesSelector, formattedSessionsSelector } from './redux/selectors'
import { Session, SessionsListNavigationProp, SessionsListRouteProp, Type } from './types'

interface Props {
  navigation: SessionsListNavigationProp
  route: SessionsListRouteProp
  sessions: Session[]
  types: Type[]
}

const SessionList: React.FunctionComponent<Props> = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSessions())
    dispatch(getTypes())
  }, [])
  const theme = useTheme()
  const sessions = useSelector(formattedSessionsSelector)
  const dates = useSelector(datesSelector)

  return (
    <ScrollView>
      {dates.map((date, idx) => {
        return (
          <React.Fragment key={idx + date}>
            <Text
              key={date}
              style={[
                styles.date,
                { backgroundColor: theme.colors.primary, color: theme.colors.surface },
              ]}
            >
              {date}
            </Text>
            {filterSessionsByDate(sessions, date).map((session, idx) => {
              const color = session.type.color
              return (
                <SessionOverview
                  key={idx}
                  typeColor={color}
                  session={session}
                  onPress={() =>
                    props.navigation.push('SessionDetails', {
                      title: session.title,
                      type: session.type.name,
                      sessionId: session.id,
                      color,
                    })
                  }
                />
              )
            })}
          </React.Fragment>
        )
      })}
    </ScrollView>
  )
}

export default SessionList

const styles = StyleSheet.create({
  date: {
    fontWeight: 'bold',
    padding: 10,
  },
})

import React, { useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
// import { useSafeArea } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import SessionOverview from './SessionOverview'
import { filterSessionsByDate } from './SessionsListInteractor'
import { getSessions, getTypes } from './redux/actions'
import { SessionsState } from './redux/reducer'
import { Session, SessionsListNavigationProp, SessionsListRouteProp, Type } from './types'

const mapStateToProps = (state: SessionsState) => {
  return {
    sessions: state.sessions,
    dates: state.dates,
    types: state.types,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getSessions: () => dispatch(getSessions()),
    getTypes: () => dispatch(getTypes()),
  }
}

interface Props {
  navigation: SessionsListNavigationProp
  route: SessionsListRouteProp
  dates: string[]
  sessions: Session[]
  types: Type[]

  getSessions(): void
  getTypes(): void
}

const SessionList: React.FunctionComponent<Props> = props => {
  useEffect(() => {
    props.getSessions()
    props.getTypes()
  }, [])
  const theme = useTheme()
  console.log('sessions', props)

  return (
    <ScrollView>
      {props.dates.map((date, idx) => {
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
            {filterSessionsByDate(props.sessions, date).map((session, idx) => {
              const color = session.type.color
              return (
                <SessionOverview
                  key={idx}
                  typeColor={color}
                  session={session}
                  onPress={() => props.navigation.push('SessionDetails', { session, color })}
                />
              )
            })}
          </React.Fragment>
        )
      })}
    </ScrollView>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionList)

const styles = StyleSheet.create({
  date: {
    fontWeight: 'bold',
    padding: 10,
  },
})

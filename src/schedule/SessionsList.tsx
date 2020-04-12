import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
// import { useSafeArea } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getSessions, getTypes } from '../redux/actions'
import { Session, StackParamList, Type } from '../types'
import SessionOverview from './SessionOverview'
import { filterSessionsByDate, getSessionColor } from './SessionsListInteractor'

const mapStateToProps = (state: { sessions: Session[]; dates: string[]; types: Type[] }) => {
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
  navigation?: StackNavigationProp<StackParamList>
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

  return (
    <ScrollView>
      {props.dates.map((date, idx) => {
        return (
          <React.Fragment key={idx + date.replace(' ', '_')}>
            <Text
              key={date}
              style={[
                styles.date,
                { backgroundColor: theme.colors.primary, color: theme.colors.surface },
              ]}
            >
              {date}
            </Text>
            {filterSessionsByDate(props.sessions, date).map((session, idx) => (
              <SessionOverview
                key={idx}
                typeColor={getSessionColor(props.types, session.type)}
                session={session}
                onPress={() => props.navigation.push('SessionDetails', { session })}
              />
            ))}
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

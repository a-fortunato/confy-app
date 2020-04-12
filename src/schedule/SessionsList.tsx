import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
// import { useSafeArea } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getSessions } from '../redux/actions'
import { Session, StackParamList } from '../types'
import { filterSessionsByDate } from './SessionsListInteractor'

const mapStateToProps = (state: { sessions: Session[]; dates: string[] }) => {
  return {
    sessions: state.sessions,
    dates: state.dates,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getSessions: () => dispatch(getSessions()),
  }
}

interface Props {
  navigation?: StackNavigationProp<StackParamList>
  dates: string[]
  sessions: Session[]

  getSessions(): void
}

const SessionList: React.FunctionComponent<Props> = props => {
  useEffect(() => {
    props.getSessions()
  }, [])

  return (
    <ScrollView>
      {props.dates.map((date, idx) => {
        return (
          <React.Fragment key={idx + date.replace(' ', '_')}>
            <Text style={styles.date} key={date}>
              {date}
            </Text>
            {filterSessionsByDate(props.sessions, date).map((session, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => props.navigation.push('SessionDetails', { session })}
              >
                <Text>{session.name}</Text>
              </TouchableOpacity>
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
  },
})

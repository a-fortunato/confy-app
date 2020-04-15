import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { Session, StackParamList } from '../types'
import SessionDescriptionSection from './SessionDescriptionSection'
import SessionSpeakerSection from './SessionSpeakerSection'
import SessionTypeSection from './SessionTypeSection'

interface SessionRouteProps {
  route: RouteProp<StackParamList, 'SessionDetails'>
}

const SessionDetailsPresenter: React.FunctionComponent<SessionRouteProps> = ({ route }) => {
  return <SessionDetails session={route.params.session} />
}

interface Props {
  session: Session
}

const SessionDetails: React.FunctionComponent<Props> = ({ session }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{session.date}</Text>
        <Text>{session.time}</Text>
      </View>
      <Text>{session.place}</Text>
      <SessionSpeakerSection speakerName={session.speaker} />
      <SessionDescriptionSection description={session.description} />
      <SessionTypeSection typeName={session.type} />
    </ScrollView>
  )
}

export default SessionDetailsPresenter

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
})

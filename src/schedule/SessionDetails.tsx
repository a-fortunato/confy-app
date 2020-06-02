import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import GoogleLogInButton from '../oauth/GoogleLogInButton'
import { Session, SessionDetailsNavigationProp, SessionDetailsRouteProp } from '../types'
import { useUserContext } from '../user/UserProvider'
import JoinSessionButton from './JoinSessionButton'
import SessionDescriptionSection from './SessionDescriptionSection'
import SessionSpeakerSection from './SessionSpeakerSection'
import SessionTypeSection from './SessionTypeSection'

interface SessionRouteProps {
  route: SessionDetailsRouteProp
  navigation: SessionDetailsNavigationProp
}

const SessionDetailsPresenter: React.FunctionComponent<SessionRouteProps> = ({ route }) => {
  return <SessionDetails session={route.params.session} />
}

interface Props {
  session: Session
}

const SessionDetails: React.FunctionComponent<Props> = ({ session }) => {
  const { user } = useUserContext()
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.dateContainer}>
          <Text>{session.date}</Text>
          <Text>{session.time}</Text>
        </View>
        <Text>{session.place}</Text>
        <SessionSpeakerSection speakerName={session.speaker} />
        <SessionDescriptionSection description={session.description} />
        <SessionTypeSection typeName={session.type} />
      </ScrollView>
      {user ? <JoinSessionButton /> : <GoogleLogInButton />}
    </View>
  )
}

export default SessionDetailsPresenter

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
})

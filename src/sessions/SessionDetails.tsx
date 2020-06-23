import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import GoogleLogInButton from '../oauth/GoogleLogInButton'
import { useUserContext } from '../user'
import { getDateString, getTimeString } from './DateParser'
import JoinSessionButton from './JoinSessionButton'
import SessionDescriptionSection from './SessionDescriptionSection'
import SessionSpeakerSection from './SessionSpeakerSection'
import SessionTypeSection from './SessionTypeSection'
import { Session, SessionDetailsNavigationProp, SessionDetailsRouteProp } from './types'

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
          <Text>{getDateString(session.startsAt)}</Text>
          <Text>{getTimeString(session.startsAt) + '-' + getTimeString(session.endsAt)}</Text>
        </View>
        {session.venue && <Text>{session.venue}</Text>}
        {session.speaker.length && <SessionSpeakerSection speakerName={session.speaker} />}
        {session.description && <SessionDescriptionSection description={session.description} />}
        <SessionTypeSection type={session.type} />
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

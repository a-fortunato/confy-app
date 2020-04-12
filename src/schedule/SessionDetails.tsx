import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { Session, StackParamList } from '../types'

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
    <View>
      <Text>{`${session.date} · ${session.time}`}</Text>
      <Text>{session.name}</Text>
      <Text>{session.speaker}</Text>
      <Text>{session.description}</Text>
    </View>
  )
}

export default SessionDetailsPresenter

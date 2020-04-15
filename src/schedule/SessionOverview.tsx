import color from 'color'
import React from 'react'
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { Session } from '../types'
import SessionTypeTag from './SessionTypeTag'

interface Props {
  session: Session
  typeColor?: string

  onPress(event: GestureResponderEvent): void
}

const SessionOverview: React.FunctionComponent<Props> = ({ typeColor, session, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sessionContainer}>
      <View style={styles.sessionContainer}>
        <Text
          style={[
            styles.sessionDate,
            { backgroundColor: typeColor && color(typeColor).lighten(0.1) },
          ]}
        >
          {session.time}
        </Text>
      </View>
      <View style={[styles.sessionSummary, { backgroundColor: typeColor }]}>
        <Text style={[styles.sessionText, styles.sessionTitle]}>{session.name}</Text>
        <Text style={styles.sessionText}>{session.place}</Text>
        {/* session.speaker && <Text>{`Speakers: ${session.speaker}`}</Text> */}
        <SessionTypeTag type={session.type} />
      </View>
    </TouchableOpacity>
  )
}

export default SessionOverview

const styles = StyleSheet.create({
  sessionContainer: {
    flexDirection: 'row',
  },
  sessionDate: {
    padding: 10,
    textAlignVertical: 'center',
  },
  sessionSummary: {
    flex: 1,
    padding: 10,
  },
  sessionText: {
    flexWrap: 'wrap',
  },
  sessionTitle: {
    fontWeight: 'bold',
  },
})

import color from 'color'
import React from 'react'
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { getTimeString } from './DateParser'
import SessionTypeTag from './SessionTypeTag'
import { Session } from './types'

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
          {getTimeString(session.startsAt) + ' - ' + getTimeString(session.endsAt)}
        </Text>
      </View>
      <View style={[styles.sessionSummary, { backgroundColor: typeColor }]}>
        <Text style={[styles.sessionText, styles.sessionTitle]}>{session.title}</Text>
        {session.venue && <Text style={styles.sessionText}>{session.venue}</Text>}
        {/* session.speaker && <Text>{`Speakers: ${session.speaker}`}</Text> */}
        <SessionTypeTag typeName={session.type.name} />
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

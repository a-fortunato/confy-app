import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'

interface Props {
  name: string
  image: string
}

const SpeakerBadge: React.FunctionComponent<Props> = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <Avatar.Image source={{ uri: image }} />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default SpeakerBadge

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  text: {
    textAlignVertical: 'center',
    padding: 10,
  },
})

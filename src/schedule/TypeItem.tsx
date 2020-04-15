import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Badge, Text } from 'react-native-paper'

interface Props {
  name: string
  color: string
}

const TypeItem: React.FunctionComponent<Props> = ({ name, color }) => {
  return (
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        <Badge visible size={10} style={{ backgroundColor: color }} />
      </View>
      <Text>{name}</Text>
    </View>
  )
}

export default TypeItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  badgeContainer: {
    paddingEnd: 5,
  },
})

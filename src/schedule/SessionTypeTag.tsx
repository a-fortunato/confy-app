import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, useTheme } from 'react-native-paper'

interface Props {
  type: string
}

const SessionTypeTag: React.FunctionComponent<Props> = ({ type }) => {
  if (!type) return null

  const theme = useTheme()
  return (
    <Text
      style={[
        styles.sessionType,
        { backgroundColor: theme.colors.disabled, color: theme.colors.surface },
      ]}
    >
      {type}
    </Text>
  )
}

export default SessionTypeTag

const styles = StyleSheet.create({
  sessionType: {
    alignSelf: 'flex-start',
    padding: 5,
    marginTop: 5,
  },
})

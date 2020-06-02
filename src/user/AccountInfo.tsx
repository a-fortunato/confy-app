import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import GoogleLogOutButton from '../oauth/GoogleLogOutButton'
import { useUserContext } from './UserProvider'

interface Props {}

const AccountInfo: React.FC<Props> = () => {
  const { user } = useUserContext()

  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
      <GoogleLogOutButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default AccountInfo

import React from 'react'
import { StyleSheet, View } from 'react-native'
import GoogleLogInButton from './GoogleLogInButton'

const LogInScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <GoogleLogInButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default LogInScreen

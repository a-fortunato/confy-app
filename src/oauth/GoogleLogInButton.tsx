import React from 'react'
import { Button, Text } from 'react-native-paper'
import { OAuthProvider, User, useUserContext } from '../user'
import { GoogleLogInResult, signInWithGoogleAsync } from './GoogleAuth'

interface Props {}

const buttonText = 'Google Log in'

function parseGoogleData(data: GoogleLogInResult): User {
  return {
    accessToken: data.accessToken,
    email: data.user.email,
    id: data.user.id,
    name: data.user.name,
    avatar: data.user.photoUrl,
    provider: OAuthProvider.Google,
  }
}

const GoogleLogInButton: React.FC<Props> = () => {
  const { saveUser } = useUserContext()
  return (
    <Button
      onPress={async () => {
        const logInData = await signInWithGoogleAsync()
        if (logInData.accessToken) {
          const user: User = parseGoogleData(logInData as GoogleLogInResult)
          saveUser(user)
        }
      }}
    >
      <Text>{buttonText}</Text>
    </Button>
  )
}

export default GoogleLogInButton

import React from 'react'
import { Button, Text } from 'react-native-paper'
import { useUserContext } from '../user'

interface Props {
  logOut(accessToken: string): void
}

const buttonText = 'Log out'
const LogOutButton: React.FC<Props> = ({ logOut }) => {
  const { user, deleteUser } = useUserContext()
  return (
    <Button
      onPress={() => {
        logOut(user.accessToken)
        deleteUser(user.id)
      }}
    >
      <Text>{buttonText}</Text>
    </Button>
  )
}

export default LogOutButton

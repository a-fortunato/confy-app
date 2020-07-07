import React from 'react'
import { Button, Text } from 'react-native-paper'

interface Props {}

const buttonText = 'Join session! - COMING SOON'
const JoinSessionButton: React.FC<Props> = () => {
  return (
    <Button>
      <Text>{buttonText}</Text>
    </Button>
  )
}

export default JoinSessionButton

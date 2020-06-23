import React from 'react'
import { Text } from 'react-native-paper'
import DetailsDivider from './DetailsDivider'

interface Props {
  description?: string
}

const SessionDescriptionSection: React.FunctionComponent<Props> = ({ description }) => {
  if (!description) return null
  return (
    <>
      <DetailsDivider />
      <Text>{description}</Text>
    </>
  )
}

export default SessionDescriptionSection

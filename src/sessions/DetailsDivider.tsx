import React from 'react'
import { StyleSheet } from 'react-native'
import { Divider } from 'react-native-paper'

interface Props {}

const DetailsDivider: React.FunctionComponent<Props> = () => {
  return <Divider style={styles.divider} />
}

export default DetailsDivider

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
  },
})

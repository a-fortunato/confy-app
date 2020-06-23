import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import config from '../config'

interface Props {}

const AppInfo: React.FunctionComponent<Props> = () => {
  const iconsLicense = useMemo(
    () =>
      'Icono de app diseñado por Smashicons (https://www.flaticon.es/autores/smashicons) from https://www.flaticon.es',
    []
  )
  const version = `${config.version} - ${config.releaseChannel}`

  return (
    <View style={styles.container}>
      <Text>{iconsLicense}</Text>
      <Text style={styles.version}>{`v${version}`}</Text>
    </View>
  )
}

export default AppInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  version: {
    position: 'absolute',
    bottom: 0,
  },
})

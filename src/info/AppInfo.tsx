import React, { useMemo } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

interface Props {}

const AppInfo: React.FunctionComponent<Props> = () => {
  const iconsLicense = useMemo(
    () =>
      'Icono de app diseñado por Smashicons (https://www.flaticon.es/autores/smashicons) from https://www.flaticon.es',
    []
  )

  return (
    <View>
      <Text>{iconsLicense}</Text>
    </View>
  )
}

export default AppInfo

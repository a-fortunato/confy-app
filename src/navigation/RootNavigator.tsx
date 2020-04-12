import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import StackNavigator from './Stack'

export const RootNavigator = () => {
  const theme = useTheme()
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme

  return (
    <NavigationContainer theme={navigationTheme}>
      <StackNavigator />
    </NavigationContainer>
  )
}

import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as StoreProvider } from 'react-redux'
import { createStore } from 'redux'
import { RootNavigator } from './navigation/RootNavigator'
import reducer from './redux/reducer'
import { UserProvider } from './user/UserProvider'

const store = createStore(reducer)

/*
Theme Customization:

import { DefaultTheme, Colors } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.deepOrange400 // or 'tomato',
    accent: 'yellow',
  },
}

<PaperProvider theme={theme}>
*/

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <UserProvider>
            <RootNavigator />
          </UserProvider>
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  )
}

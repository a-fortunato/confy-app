import { createOffline } from '@redux-offline/redux-offline'
import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as StoreProvider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './baseReducer'
import { RootNavigator } from './navigation/RootNavigator'
import { default as sessionsReducer } from './sessions/redux/reducer'
import { UserProvider } from './user'

const reduxOfflineConfig = {
  ...offlineConfig,
  // rehydrate: true,
  // persistOptions: { whitelist: ['schedule'] },
}
const { enhanceReducer, middleware, enhanceStore } = createOffline(reduxOfflineConfig)

const store = createStore(
  //rootReducer(combinedReducers, console.error),
  rootReducer(enhanceReducer(sessionsReducer)),
  undefined,
  compose(applyMiddleware(thunk, middleware), enhanceStore)
)

/*
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    const nextReducer = require('./reducer');
    this.store.replaceReducer(nextReducer);
  });
}
this.refreshAction = refreshAccessAction;
*/
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

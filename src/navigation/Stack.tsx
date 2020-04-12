import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import SessionDetails from '../schedule/SessionDetails'
import { StackParamList } from '../types'
import { BottomTabs } from './BottomTabs'

const Stack = createStackNavigator<StackParamList>()

export default function StackNavigator() {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="SessionsList"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name

          return (
            <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
              {previous && (
                <Appbar.BackAction onPress={navigation.goBack} color={theme.colors.primary} />
              )}
              <Appbar.Content
                title={title}
                titleStyle={{
                  // fontSize: 18,
                  // fontWeight: 'bold',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          )
        },
      }}
    >
      <Stack.Screen
        name="SessionsList"
        component={BottomTabs}
        // @ts-ignore // TODO remove ts-ignore (state is not found in types)
        options={({ route: { state } }) => {
          const routeName = state ? state.routes[state.index].name : 'Confy App'
          return {
            headerTitle: routeName,
          }
        }}
      />
      <Stack.Screen
        name="SessionDetails"
        component={SessionDetails}
        options={({ route }) => ({
          title: route.params.session.name,
        })}
      />
    </Stack.Navigator>
  )
}

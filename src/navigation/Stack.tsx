import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React, { ReactElement, useEffect } from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import SessionDetails from '../sessions/SessionDetails'
import SessionTypeTag from '../sessions/SessionTypeTag'
import { getEvents } from '../sessions/redux/actions'
import { SessionsState } from '../sessions/redux/reducer'
import { StackParamList } from '../sessions/types'
import { BottomTabs } from './BottomTabs'

const Stack = createStackNavigator<StackParamList>()

interface Options extends StackNavigationOptions {
  subtitle: string | ReactElement
}

export default function StackNavigator() {
  const dispatch = useDispatch()
  const theme = useTheme()
  const eventName = useSelector<SessionsState>(state => state.event?.name)
  useEffect(() => {
    dispatch(getEvents())
  }, [])

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
          const subtitle = (options as Options).subtitle

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
                subtitle={subtitle}
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
          const routeName = state?.index ? state.routes[state.index].name : eventName || 'Confy App'
          return {
            headerTitle: routeName,
          }
        }}
      />
      <Stack.Screen
        name="SessionDetails"
        component={SessionDetails}
        options={({ route }) => {
          return {
            title: route.params.title,
            subtitle: <SessionTypeTag typeName={route.params.type} />,
          }
        }}
      />
    </Stack.Navigator>
  )
}

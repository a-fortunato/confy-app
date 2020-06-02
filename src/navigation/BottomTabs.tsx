import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import color from 'color'
import React from 'react'
import { useTheme } from 'react-native-paper'
import AppInfo from '../info/AppInfo'
import LogInScreen from '../oauth/LogInScreen'
import SessionsList from '../schedule/SessionsList'
import AccountInfo from '../user/AccountInfo'
import { useUserContext } from '../user/UserProvider'

const Tab = createMaterialBottomTabNavigator()

export const BottomTabs = () => {
  const { user } = useUserContext()
  const theme = useTheme()
  const tabBarColor = theme.colors.surface

  return (
    <Tab.Navigator
      initialRouteName="Schedule"
      backBehavior="initialRoute"
      shifting={true}
      activeColor={theme.colors.primary}
      inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Schedule"
        component={SessionsList}
        options={{
          tabBarIcon: 'calendar',
          tabBarColor,
        }}
      />
      <Tab.Screen
        name="Info"
        component={AppInfo}
        options={{
          tabBarIcon: 'information',
          tabBarColor,
        }}
      />
      <Tab.Screen
        name="My Account"
        component={user ? AccountInfo : LogInScreen}
        options={{
          tabBarIcon: 'settings',
          tabBarColor,
        }}
      />
    </Tab.Navigator>
  )
}

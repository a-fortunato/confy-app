import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { useTheme } from 'react-native-paper'
import AppInfo from '../info/AppInfo'
import SessionsList from '../schedule/SessionsList'

const Tab = createMaterialBottomTabNavigator()

export const BottomTabs = () => {
  const theme = useTheme()
  const tabBarColor = theme.colors.surface
  // theme.dark ? (overlay(6, theme.colors.surface) as string) : theme.colors.surface

  return (
    <Tab.Navigator
      initialRouteName="Schedule"
      backBehavior="initialRoute"
      shifting={true}
      activeColor={theme.colors.primary}
      inactiveColor={
        theme.colors.text
        /* color(theme.colors.text)
        .alpha(0.6)
        .rgb()
        .string() */
      }
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
        component={AppInfo}
        options={{
          tabBarIcon: 'settings',
          tabBarColor,
        }}
      />
    </Tab.Navigator>
  )
}

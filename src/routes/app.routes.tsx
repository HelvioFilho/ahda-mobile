import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';
import { Home } from '../screens/Home';
import { SinglePage } from '../screens/SinglePage';


export function BottomRoute() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          borderRadius: 15
        }
      }}

    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Search"
        component={SinglePage}
      />
      <Screen
        name="Play"
        component={Home}
      />
      <Screen
        name="Message"
        component={Home}
      />
      <Screen
        name="Setting"
        component={Home}
      />
    </Navigator>
  )
}
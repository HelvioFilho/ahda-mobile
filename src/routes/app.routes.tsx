import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { SinglePage } from '../screens/SinglePage';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Player } from '../components/Player';

export function BottomRoute() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          height: 70,
          borderRadius: 15,
          shadowColor: '#7F5DF0',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          paddingTop: 5,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
        }
      }}

    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons color={focused ? 'red' : 'black'} name={focused ? "home" : "home-outline"} size={33} />
          )
        }}
      />
      <Screen
        name="Busca"
        component={SinglePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons color={focused ? 'red' : 'black'} name="search" size={33} />
          )
        }}
      />
      <Screen
        name="Play"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarButton: () => (
            <Player />
          )
        }}
      />
      <Screen
        name="Mensagem"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons color={focused ? 'red' : 'black'} name={focused ? 'message' : 'message-outline'} size={28} />
          )
        }}
      />
      <Screen
        name="Opções"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons color={focused ? 'red' : 'black'} name={focused ? 'settings' : 'settings-outline'} size={28} />
          )
        }}
      />
    </Navigator>
  )
}
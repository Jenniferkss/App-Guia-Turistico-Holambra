import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import PontosTuristicos from './src/screens/PontosTuristicos';
import RestaurantesScreen from './src/screens/RestaurantesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#C2C7BE',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIconStyle: { display: 'none' },
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ tabBarLabel: 'Início' }}
        />
        <Tab.Screen
          name="Pontos"
          component={PontosTuristicos}
          options={{ tabBarLabel: 'Pontos turísticos' }}
        />
        <Tab.Screen
          name="Restaurantes"
          component={RestaurantesScreen}
          options={{ tabBarLabel: 'Restaurantes' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#536942',
    height: 65,
    borderTopWidth: 0,
    paddingBottom: 12,
    paddingTop: 12,
  },
  tabBarLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
});

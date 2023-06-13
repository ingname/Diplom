import React from 'react'

import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './src/nav/Autorization/auth';
import HomeScreen from './src/nav/hello_window';
import MainScreen from './src/nav/Main/Main_window'
import Registration from './src/nav/Autorization/reg';
import SudokuScreen from './src/nav/Game/Sudoku_window';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'OpenSansBold': require('./assets/fonts/OpenSansBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false
          }}

        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Sudoku"
          component={SudokuScreen}
          options={{ headerShown: false }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

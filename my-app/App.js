import React from 'react'
import { StyleSheet, Text, Image, ScrollView, View, Dimensions, Button} from 'react-native'

import { useFonts } from 'expo-font';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { LinearGradient } from 'expo-linear-gradient';
import {useBackHandler} from '@react-native-community/hooks';
import GradientText from './src/screens/GradientText';


const Stack = createNativeStackNavigator();

export default function App () {

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
          options={{headerShown: false}}
          
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{headerShown: false}}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Profile');
    }, 2500);
  return (
    <View style = {stylesheet.style_App_welcome} >
      <LinearGradient
        colors={['rgba(52,180,220,1)', 'rgba(67, 97, 238, 1)']}
        style={stylesheet.background}
      />
      <View style = {{flex:1,justifyContent:"center", alignItems: "center"}}>
        <Text style = {stylesheet.style_FOCUS}>
          FOCUS
        </Text>
      </View>

      {/* <Button
          onPress={()=>
            navigation.navigate('Profile')
          }
          title="Начать!"         
        >
        </Button> */}
    </View>
  );
};



const ProfileScreen = ({navigation}) => {
  
  useBackHandler(() => {
    if (true) {
      return true
    }
  })
  
  return (
    <View style = {{flex:1,top: 30, alignItems: "center"}}>
      <GradientText style={stylesheet.style_FOCUS_2}>FOCUS</GradientText>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  style_FOCUS: {
    fontFamily: 'OpenSansBold',
    fontSize: 32,
    color: "rgba(255, 255, 255, 1)",
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3
  },
  style_FOCUS_2: {
    fontFamily: 'OpenSansBold',
    fontSize: 32,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3
  },

  style_App_welcome: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 40,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  }
});
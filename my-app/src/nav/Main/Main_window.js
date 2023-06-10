import {useBackHandler} from '@react-native-community/hooks';
import {View, Text, Dimensions, Button, TextInput, Pressable, Image, TouchableOpacity} from 'react-native'
import GradientText from '../Autorization/GradientText';
import stylesheets from '../../style/style'
import React from 'react';


const MainScreen = ({navigation}) => {

      return (
        <View style = {stylesheets.container}>
          <View style = {{alignItems: "center", top: '4%'}}>
            <GradientText style={stylesheets.style_FOCUS_2}>FOCUS</GradientText>
          </View>
          <View style = {stylesheets.view_played}>
            <Text style = {stylesheets.text_played}>
              Играли ранее
            </Text>
          </View>
          <View style= {stylesheets.view_container}>
          </View>
          <View>
            <TouchableOpacity style = {{left:'10%', top: '9%', width: 90}}>
              <Image
              source={require('../../../assets/img/home_be.png')}
              style={stylesheets.image}
              />
            </TouchableOpacity>
            <TouchableOpacity style = {{left:'10%', top: '9%', width: 90}}>
              <Image
              source={require('../../../assets/img/game_be.png')}
              style={stylesheets.image}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    };
  
export default MainScreen;
import {View, Text, Image, TouchableOpacity} from 'react-native'
import GradientText from '../Autorization/GradientText';
import stylesheets from '../../style/style'
import React from 'react';
import {login} from '../Autorization/auth';


const UserScreen = ({navigation}) => {
    const getMoviesMainWindow = async () => {
      navigation.navigate('MainScreen')
    };
      return (
        <View style = {stylesheets.container}>
          <View style = {{alignItems: "center", top: '4%'}}>
            <GradientText style={stylesheets.style_FOCUS_2}>{login}</GradientText>
          </View>
          <View style = {stylesheets.view_played}>
            <Text style = {stylesheets.text_played}>
              Ваша статистика
            </Text>
          </View>
          <View style= {stylesheets.view_container}>
            <View style= {{flexDirection: "row", justifyContent: 'space-evenly'}}>
            </View>
          </View>
          <View style= {{flexDirection: 'row', justifyContent: 'space-around', top: '17%'}}>
            <TouchableOpacity onPress={()=>
                        getMoviesMainWindow()
                    }>
              <Image
              source={require('../../../assets/img/home_be.png')}
              style={stylesheets.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
              source={require('../../../assets/img/user_be.png')}
              style={{width: null, resizeMode: 'contain', height: 50, width: 50, top: '4%'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    };
  
export default UserScreen;
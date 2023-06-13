import {useBackHandler} from '@react-native-community/hooks';
import {View, Text, Dimensions, Button, TextInput, Pressable, Image, TouchableOpacity} from 'react-native'
import GradientText from '../Autorization/GradientText';
import stylesheets from '../../style/style'
import React from 'react';





const MainScreen = ({navigation}) => {
      const getMoviesGameSudoku = async () => {
        navigation.navigate('Sudoku')
      };

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
            <View style= {{flexDirection: "row", justifyContent: 'space-evenly'}}>
              <View style = {stylesheets.view_container_game}>
                <TouchableOpacity style={{flex:1, alignItems: "center",}} onPress={()=>
                        getMoviesGameSudoku()
                    }>
                  <Text style={{fontSize:17, color: "rgba(124, 124, 138, 1)", }}>
                    Найти числа по порядку
                  </Text>
              </TouchableOpacity>
            </View>
            <View style = {stylesheets.view_container_game}>
            <TouchableOpacity style={{flex:1, alignItems: "center",}}>
                  <Text style={{fontSize:19, color: "rgba(124, 124, 138, 1)", }}>
                    Рим
                  </Text>
              </TouchableOpacity>
            </View>
              <View style = {stylesheets.view_container_game}>
                <TouchableOpacity style={{flex:1, alignItems: "center",}}>
                    <Text style={{fontSize:19, color: "rgba(124, 124, 138, 1)", }}>
                      Квантум
                    </Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </View>
          <View style= {{flexDirection: 'row', justifyContent: 'space-around', top: '17%'}}>
            <TouchableOpacity>
              <Image
              source={require('../../../assets/img/home_be.png')}
              style={stylesheets.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
              source={require('../../../assets/img/game_be.png')}
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
  
export default MainScreen;
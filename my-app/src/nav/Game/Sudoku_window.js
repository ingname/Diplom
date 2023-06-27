import {View, Text, Image, TouchableOpacity} from 'react-native'
import stylesheets from '../../style/style'
import React from 'react';
import GradientText from '../Autorization/GradientText';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { useState } from 'react';


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
let mas_bum = Array.from({length: 30}, (_, i) => i + 1);
let numbers = Array.from({length: 30}, (_, i) => i + 1); 
let ing = 0
let Times = ''
shuffle(numbers)
const SudokuScreen = ({navigation}) => {
      const [text_error, setMyText] = React.useState("");
      const [text_win, setMyTextWin] = React.useState("");
      
      function checks(number) {
        let num = number
        if (mas_bum[ing]==30){
          setMyTextWin("Вы выйграли!")
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(false);
          setTimeout(() => {
            setMyTextWin("");
            }, 4000); 
          }
        
        if (num == mas_bum[ing]) {
          if (num == 1){
            startTimer()
          }
          ing+=1
      }
        else{
          ing = 0
          ing = 0
          ing = 0
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(true);
          shuffle(numbers)
          setMyText("Число не по порядку")
          setTimeout(() => {
            setMyText("");
            }, 2000); 
          }
        }
      
      const getMoviesback = async () => {
        navigation.navigate('MainScreen')
        shuffle(numbers)
      };

      function startTimer() {
        setIsStopwatchStart(!isStopwatchStart);
        setResetStopwatch(false);
      };

      const [isStopwatchStart, setIsStopwatchStart] = useState(false);
      const [resetStopwatch, setResetStopwatch] = useState(false);    

      function refresh(numbers) {
        setIsStopwatchStart(false);
        setResetStopwatch(true);
        shuffle(numbers)
        setMyText("Числа заменены")
          setTimeout(() => {
            setMyText("");
            }, 2000); 
          }
 

      return (
        <View>
          <View>
            <TouchableOpacity style={{height: 70, width: 70}} onPress={()=>
                getMoviesback()
            }>
              <Image
              source={require('../../../assets/img/ico_back.png')}
              style={{width: null, resizeMode: 'contain', height: 50, width: 50, top: 40, left: 20}}
              />
            </TouchableOpacity>

            <Text style={{fontSize:25, top: '40%', left: '30%'}}
              value={text_win}>
              {text_win}
            </Text>
           
            <Stopwatch
              laps
              msecs
              start={isStopwatchStart}
              reset={resetStopwatch}
              options={options}
              getTime={(time) => {
                Times = time;
            }}
            />
 

            <TouchableOpacity style={{left: '60%', top: '-50%'}} onPress={()=>
                refresh(numbers)
            }>
              <GradientText style={{fontSize:19}}>
                Начать заново
              </GradientText>
            </TouchableOpacity>
  
          </View>
          <View style = {{flexDirection: "row", justifyContent: 'center', top:'25%'}}>
          <View style = {{justifyContent: 'flex-start'}}>
          <TouchableOpacity style = {stylesheets.view_cubic} onPress={()=> checks(numbers[0])}>
            <Text>
              {numbers[0]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic} onPress={()=> checks(numbers[1])}>
            <Text>
              {numbers[1]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[2])}>
            <Text>
              {numbers[2]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[3])}>
            <Text>
              {numbers[3]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[4])}>
            <Text>
              {numbers[4]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[5])}>
            <Text>
              {numbers[5]}
            </Text>
          </TouchableOpacity>
        </View>
        <View style = {{justifyContent: 'flex-start'}}>
          <TouchableOpacity style = {stylesheets.view_cubic} onPress={()=> checks(numbers[6])}>
            <Text>
              {numbers[6]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic} onPress={()=> checks(numbers[7])}>
            <Text>
              {numbers[7]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[8])}>
            <Text>
              {numbers[8]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[9])}>
            <Text>
              {numbers[9]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[10])}>
            <Text>
              {numbers[10]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[11])}>
            <Text>
              {numbers[11]}
            </Text>
          </TouchableOpacity>
        </View>
        <View style = {{justifyContent: 'flex-start'}}>
          <TouchableOpacity style = {stylesheets.view_cubic} onPress={()=> checks(numbers[12])}>
            <Text>
              {numbers[12]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic} onPress={()=> checks(numbers[13])}>
            <Text>
              {numbers[13]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[14])}>
            <Text>
              {numbers[14]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[15])}>
            <Text>
              {numbers[15]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[16])}>
            <Text>
              {numbers[16]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[17])}>
            <Text>
              {numbers[17]}
            </Text>
          </TouchableOpacity>
        </View>
        <View style = {{justifyContent: 'flex-start'}}>
          <TouchableOpacity style = {stylesheets.view_cubic} onPress={()=> checks(numbers[18])}>
            <Text>
              {numbers[18]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic} onPress={()=> checks(numbers[19])}>
            <Text>
              {numbers[19]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[20])}>
            <Text>
              {numbers[20]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[21])}>
            <Text>
              {numbers[21]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[22])}>
            <Text>
              {numbers[22]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[23])}>
            <Text>
              {numbers[23]}
            </Text>
          </TouchableOpacity>
        </View>
        <View style = {{justifyContent: 'flex-start'}}>
          <TouchableOpacity style = {stylesheets.view_cubic} onPress={()=> checks(numbers[24])}>
            <Text>
              {numbers[24]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic} onPress={()=> checks(numbers[25])}>
            <Text>
              {numbers[25]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[26])}>
            <Text>
              {numbers[26]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[27])}>
            <Text>
              {numbers[27]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[28])}>
            <Text>
              {numbers[28]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[29])}>
            <Text>
              {numbers[29]}
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style = {{bottom: -150}}>
          <Text style = {{fontSize: 20, height: '100%', textAlign: 'center'}}
            onChangeText={setMyText}
            value={text_error}>
            {text_error}
          </Text>
        </View>
        </View>
        
      );
    };

    const options = {
      container: {
          padding: 5,
          borderRadius: 5,
          width: 200,
          alignItems: 'center',
          top:"60%",
          left: "25%",
          fontSize: 25,
      },
      text: {
          fontSize: 25,
          marginLeft: 7,
      },
  };
export default SudokuScreen;
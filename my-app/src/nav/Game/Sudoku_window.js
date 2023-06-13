import {View, Text, Dimensions, Button, TextInput, Pressable, Image, TouchableOpacity} from 'react-native'
import stylesheets from '../../style/style'
import React from 'react';


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


let mas_bum = Array.from({length: 50}, (_, i) => i + 1);
let numbers = Array.from({length: 50}, (_, i) => i + 1); 
shuffle(numbers)

const SudokuScreen = ({navigation}) => {


      const [text_error, setMyText] = React.useState("");

      let ing = 0
      function checks(number) {
        let num = number
        if (num == mas_bum[ing]) {
          ing+=1
        }
        else{
          ing = 0
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

      return (
        <View>
          <View>
            <TouchableOpacity onPress={()=>
                getMoviesback()
            }>
              <Image
              source={require('../../../assets/img/ico_back.png')}
              style={{width: null, resizeMode: 'contain', height: 40, width: 40, top: 40, left: 20}}
              
              />
            </TouchableOpacity>
          </View>
          <View style = {{flexDirection: "row", justifyContent: 'center', top:'5%'}}>
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
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[6])}>
            <Text>
              {numbers[6]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {stylesheets.view_cubic}onPress={()=> checks(numbers[7])}>
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
        </View>
        <View style = {{justifyContent: 'flex-start'}}>
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
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[12])}>
            <Text>
              {numbers[12]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic} onPress={()=> checks(numbers[13])}>
            <Text>
              {numbers[13]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic} onPress={()=> checks(numbers[14])}>
            <Text>
              {numbers[14]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic} onPress={()=> checks(numbers[15])}>
            <Text>
              {numbers[15]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic} onPress={()=> checks(numbers[16])}>
            <Text>
              {numbers[16]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic} onPress={()=> checks(numbers[17])}>
            <Text>
              {numbers[17]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[18])}>
            <Text>
              {numbers[18]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[19])}>
            <Text>
              {numbers[19]}
            </Text>
          </TouchableOpacity >
        </View>
        <View style = {{justifyContent: 'flex-start'}}>
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[20])}>
            <Text>
              {numbers[20]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[21])}>
            <Text>
              {numbers[21]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[22])}>
            <Text>
              {numbers[22]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[23])}>
            <Text>
              {numbers[23]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[24])}>
            <Text>
              {numbers[24]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[25])}>
            <Text>
              {numbers[25]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[26])}>
            <Text>
              {numbers[26]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[27])}>
            <Text>
              {numbers[27]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[28])}>
            <Text>
              {numbers[28]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[29])}>
            <Text>
              {numbers[29]}
            </Text>
          </TouchableOpacity >
        </View>
        <View style = {{justifyContent: 'flex-start'}}>
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[30])}>
            <Text>
              {numbers[30]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[31])}>
            <Text>
              {numbers[31]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[32])}>
            <Text>
              {numbers[32]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[33])}>
            <Text>
              {numbers[33]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[34])}>
            <Text>
              {numbers[34]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[35])}>
            <Text>
              {numbers[35]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[36])}>
            <Text>
              {numbers[36]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[37])}>
            <Text>
              {numbers[37]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[38])}>
            <Text>
              {numbers[38]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[39])}>
            <Text>
              {numbers[39]}
            </Text>
          </TouchableOpacity >
        </View>
        <View style = {{justifyContent: 'flex-start'}}>
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[40])}>
            <Text>
              {numbers[40]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[41])}>
            <Text>
              {numbers[41]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[42])}>
            <Text>
              {numbers[42]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[43])}>
            <Text>
              {numbers[43]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[44])}>
            <Text>
              {numbers[44]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[45])}>
            <Text>
              {numbers[45]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[46])}>
            <Text>
              {numbers[46]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[47])}>
            <Text>
              {numbers[47]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[48])}>
            <Text>
              {numbers[48]}
            </Text>
          </TouchableOpacity >
          <TouchableOpacity  style= {stylesheets.view_cubic}onPress={()=> checks(numbers[49])}>
            <Text>
              {numbers[49]}
            </Text>
          </TouchableOpacity >
        </View>

        </View>
        <View style = {{bottom: -80}}>
          <Text style = {{fontSize: 20, height: '100%', textAlign: 'center'}}
            onChangeText={setMyText}
            value={text_error}>
            {text_error}
          </Text>
        </View>
        </View>
        
      );
    };
  
export default SudokuScreen;
import {useBackHandler} from '@react-native-community/hooks';
import {View, Text, Button, TextInput} from 'react-native'
import GradientText from './GradientText';
import stylesheets from '../../style/style'
import React from 'react';

let login

const ProfileScreen = ({navigation}) => {
    useBackHandler(() => {
      if (true) {
        return true
      }
    })
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const [myText, setMyText] = React.useState("Введите логин и пароль");
    function a (){
        login = text
    }
    
   
    
    const getMoviesFromApi = async () => {
        if (text == ''|| text2 == ''){
            errorTextEdit2()
        }
        else{
            const res = await fetch ('http://192.168.31.188:5000/login/'+text+'_'+text2).then(response => response.text()).catch((error) => {
            console.error(error);

            });
            if (res.replace("\n", "") == 'true'){
                a()
                navigation.navigate('MainScreen')
            }
            else{
                errorTextEdit()
            }
        }
    };
    const getMoviesInReg = async () => {
        navigation.navigate('Registration')

    };
    const errorTextEdit = async () => {
        setMyText("Вы ввели не правильные даные")
    }
    const errorTextEdit2 = async () => {
        setMyText("Вы не ввели данные")
    }
    return (
      <View style = {{flex:1}}>
        <View style = {{alignItems: "center", top: 130}}>
            <GradientText style={stylesheets.style_FOCUS_2}>FOCUS</GradientText>
        </View>
        <View style = {{top: 214, left: 39, width: 282.7, height: 536}}>
            <View style = {{width: 315, height: 25.8, alignItems: "center"}}>
                <Text style={{fontSize:16}}
                onChangeText={setMyText}
                value={myText}>
                {myText}
                </Text>
            </View>
            <View style = {{left: 10,top: 20, width: 47.12, height: 19.35, alignItems: "center"}}>
                <Text style={{fontSize:16, color: "rgba(124, 124, 138, 1)"}}>
                    Логин
                </Text>
            </View>
            <TextInput style={stylesheets.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Введите логин"
                >
            </TextInput>
            <View style = {{left: 10, top:40, width: 56, height: 19.35, alignItems: "center"}}>
                <Text style={{fontSize:16, color: "rgba(124, 124, 138, 1)"}}>
                    Пароль
                </Text>
            </View>
            <TextInput style={stylesheets.input2}
                onChangeText={onChangeText2}
                value={text2}
                placeholder="Введите пароль"
                >
            </TextInput>
            <View style = {stylesheets.button_a}>
                <Button style = {{}}
                    onPress={()=>
                        getMoviesFromApi()
                    }
                    title="Войти"
                >
                </Button>
            </View>
            <View style = {{width: 315, height: 30, alignItems: "center", top: 120}}>
                <Text style={{fontSize:16}} >
                    Если у вас нет аккаунта
                    
                </Text>
                <GradientText style={{fontSize:16, textDecorationLine: 'underline'}} onPress={()=>
                        getMoviesInReg()
                    }>Зарегистрируйтесь</GradientText>
            </View>
        </View>
      </View>
    );
  };


export default ProfileScreen;
export {login}
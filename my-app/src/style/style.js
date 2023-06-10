import { StyleSheet, Dimensions } from "react-native";


const stylesheets = StyleSheet.create({
    container: {
      flex: 1,
    },

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
    },
    input: {
      width: 315,
      height: 49.45,
      borderRadius: 8,
      backgroundColor: "rgba(248,248,255,1)",
      shadowColor:"black",
      elevation: 2,
      padding: 10,
      top: 30,
    },
    input2: {
      width: 315,
      height: 49.45,
      borderRadius: 8,
      backgroundColor: "rgba(248,248,255,1)",
      shadowColor:"black",
      elevation: 2,
      padding: 10,
      top: 50,
    },
    button_a:{
      top: 90,
      width: 315,
      borderRadius: 24
    },
    view_played: {
      top: '7%',
      width: 200, 
      height: 30, 
      alignItems: "center"
    },
    text_played: {
      fontSize:19, 
      color: "rgba(124, 124, 138, 1)"
    },
    view_container: {
      top: '7%',
      left: '5%',
      width: '90%',
      height: '73%',
      borderRadius: 8,
      backgroundColor: "rgba(248,248,255,1)",
      shadowColor:"black",
      elevation: 2,
      padding: 10,
    },
    view_handler: {
      top: '10%',
      left: '-1%',
      width: '160%',
      height: '80%',
      borderRadius: 8,
      backgroundColor: "rgba(248,248,255,1)",
      shadowColor:"black",
      elevation: 2,
      padding: 10,
    },
    image: {
      width: null,
      resizeMode: 'contain',
      height: 55,
      width: 55,
    }
  });

  export default stylesheets;
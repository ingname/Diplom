import stylesheets from '../style/style'
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View} from 'react-native'



const HomeScreen = ({navigation}) => {
    setTimeout(() => {
      navigation.navigate('Profile');
      }, 2500);
    return (
      <View style = {stylesheets.style_App_welcome} >
        <LinearGradient
          colors={['rgba(52,180,220,1)', 'rgba(67, 97, 238, 1)']}
          style={stylesheets.background}
        />
        <View style = {{flex:1,justifyContent:"center", alignItems: "center"}}>
          <Text style = {stylesheets.style_FOCUS}>
            FOCUS
          </Text>
        </View>
      </View>
    );
  };


  export default HomeScreen;
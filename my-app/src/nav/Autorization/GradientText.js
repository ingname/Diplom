import React from 'react';
import {Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['rgba(52,180,220,1)', 'rgba(67, 97, 238, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
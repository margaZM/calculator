import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';
// import {useCalculator} from '../Hooks/useCalculator';
import {useAppSelector} from '../app/hooks';

// interface IInputCalculator {
//   value: string;
// }

export const InputCalculator = () => {
  // const {state} = useCalculator();
  const calculator = useAppSelector(state => state.calculator.value);

  // console.log(value, 'salida');
  // console.log(state, 'salida');
  return (
    <View style={styles.containerResult}>
      <Text style={styles.textResult}> {calculator} </Text>
    </View>
  );
};

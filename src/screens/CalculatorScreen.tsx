import React from 'react';
import {View} from 'react-native';
import {styles} from '../themes/appTheme';
import {ButtonsVertical} from '../components/ButtonsVertical';
import {ButtonsGrayLight} from '../components/ButtonsGrayLight';
import {ButtonsGrayDark} from '../components/ButtonsGrayDark';
import {InputCalculator} from '../components/InputCalculator';
// import {useCalculator} from '../Hooks/useCalculator';
// import {useAppSelector} from '../app/hooks';

export const CalculatorScreen = () => {
  // const {state} = useCalculator();
  // const calculator = useAppSelector(state => state.calculator.value);
  // console.log(calculator, 'store');

  return (
    <View style={styles.containerCalculator}>
      <InputCalculator />
      <View style={styles.containerButtonCalculator}>
        <View style={styles.column1}>
          <ButtonsGrayLight />
          <ButtonsGrayDark />
        </View>
        <View style={styles.column2}>
          <ButtonsVertical />
        </View>
      </View>
    </View>
  );
};

import React from 'react';
import {View} from 'react-native';
import {ButtonCalculator} from './ButtonCalculator';
import {useAppDispatch} from '../app/hooks';
import {
  displayValues,
  calculateOperation,
} from '../slices/calculator/calculatorSlices';

export const ButtonsVertical = () => {
  const dispatch = useAppDispatch();

  const handleClick = (item: string) => {
    if (item !== '=') {
      dispatch(displayValues({type: 'operator', item}));
    } else {
      dispatch(calculateOperation());
    }
  };
  const buttonList = ['÷', 'x', '-', '+', '='];
  return (
    <View>
      {buttonList.map(item => (
        <ButtonCalculator
          key={item}
          textColor="#fff"
          textValue={item}
          background="orange"
          onPress={() => handleClick(item)}
          size={70}
        />
      ))}
    </View>
  );
};

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonCalculator} from './ButtonCalculator';
import {useAppDispatch} from '../app/hooks';
import {
  displayValues,
  resetResult,
} from '../slices/calculator/calculatorSlices';

export const ButtonsGrayLight = () => {
  const dispatch = useAppDispatch();

  const handleClick = (item: string) => {
    item === 'AC'
      ? dispatch(resetResult())
      : dispatch(displayValues({type: 'operator', item}));
  };
  const buttonList = ['AC', '+/-', '%'];

  return (
    <View style={styles.container}>
      {buttonList.map(item => (
        <ButtonCalculator
          key={item}
          textColor="#000"
          textValue={item}
          background="#9b9b9b"
          onPress={() => handleClick(item)}
          size={70}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

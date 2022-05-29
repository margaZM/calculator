import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonCalculator} from './ButtonCalculator';

export const ButtonsGrayLight = () => {
  // dispatch(displayValues({type: 'operator', item}));
  // dispatch(calculateOperation());

  const buttonList = ['AC', '+/-', '%'];

  return (
    <View style={styles.container}>
      {buttonList.map(item => (
        <ButtonCalculator
          key={item}
          textColor="#000"
          textValue={item}
          background="#9b9b9b"
          onPress={() => console.log('hola')}
          size={70}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
  },
});

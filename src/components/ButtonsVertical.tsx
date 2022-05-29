import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonCalculator} from './ButtonCalculator';

export const ButtonsVertical = () => {
  const handleClick = (item: string) => {
    console.log(item);
  };
  const buttonList = ['÷', 'x', '-', '+', '='];
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'flex-end',
  },
});

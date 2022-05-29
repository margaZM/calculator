import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonCalculator} from './ButtonCalculator';

export const ButtonsGrayDark = () => {
  const buttonList = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const handleClick = (item: string) => {
    console.log('item es:', item);
  };
  return (
    <View style={styles.container}>
      {buttonList.map(item => (
        <ButtonCalculator
          key={item}
          textColor="#fff"
          textValue={item}
          background="#2d2d2d"
          onPress={() => handleClick(item)}
          size={item === '0' ? 160 : 70}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

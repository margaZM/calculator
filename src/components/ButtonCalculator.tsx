import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface IButtonCalculator {
  textColor: string;
  textValue: string;
  onPress: () => void;
  background: string;
  size: number;
}

export const ButtonCalculator = ({
  textColor,
  background,
  textValue,
  onPress,
  size,
}: IButtonCalculator) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        width: size,
        backgroundColor: background,
      }}
      onPress={onPress}>
      <Text
        style={{
          ...styles.textButton,
          color: textColor,
        }}>
        {textValue}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    margin: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center', // se recomienda sar asi para centrar en vez de align items
    padding: 4,
    fontWeight: '500',
  },
});

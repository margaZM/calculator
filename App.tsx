import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/themes/appTheme';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar>App</StatusBar>
        <CalculatorScreen />
      </SafeAreaView>
    </Provider>
  );
};

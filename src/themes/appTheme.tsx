import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerCalculator: {
    flex: 1,
    paddingHorizontal: 20,
  },
  column1: {
    width: '78%',
  },
  column2: {
    width: '18%',
  },
  textResult: {
    color: 'white',
    fontSize: 90,
    textAlign: 'right',
  },
  containerButtonCalculator: {
    flexDirection: 'row',
    flex: 5,
  },
  containerResult: {
    flex: 2,
    justifyContent: 'flex-end',
  },
});

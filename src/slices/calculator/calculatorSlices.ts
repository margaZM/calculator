import {createSlice} from '@reduxjs/toolkit';
import * as math from 'mathjs';
// import * as math from 'mathjs;

interface CalculatorState {
  value: string;
}

const initialState: CalculatorState = {
  value: '0',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calculateOperation: state => {
      state.value = math.evaluate(state.value.replaceAll('x', '*'));
    },
    displayValues: (state, action) => {
      if (state.value === '0') {
        state.value = action.payload.item;
      } else {
        state.value = state.value + action.payload.item;
      }
      // if (state.value === '+/-') {
      //   action.payload.type === 'number' ?
      //   state.value = action.payload.item;
      // }
    },
    resetResult: state => {
      state.value = initialState.value;
    },
  },
});

export const {resetResult, displayValues, calculateOperation} =
  calculatorSlice.actions;
export default calculatorSlice.reducer;

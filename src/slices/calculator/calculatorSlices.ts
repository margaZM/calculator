import {createSlice} from '@reduxjs/toolkit';
import * as math from 'mathjs';

interface CalculatorState {
  value: string;
  result: number;
}

const initialState: CalculatorState = {
  value: '0',
  result: 0,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calculateOperation: state => {
      let value;
      const newState = state.value;
      const isMultiply = /x/gi.test(newState);
      const isDivide = /÷/gi.test(newState);

      isMultiply
        ? (value = newState.replace(/x/gi, '*'))
        : isDivide
        ? (value = newState.replace(/÷/gi, '/'))
        : (value = newState);

      state.value = math.evaluate(value);
    },
    displayValues: (state, action) => {
      if (state.value === '0') {
        state.value = action.payload.item;
      } else {
        state.value = state.value + action.payload.item;
      }
    },
    resetResult: state => {
      state.value = initialState.value;
    },
  },
});

export const {resetResult, displayValues, calculateOperation} =
  calculatorSlice.actions;
export default calculatorSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },

  reducers: {
    setIncreaseCounter: (state) => {
      state.counter += 1;
    },

    setDecreaseCounter: (state) => {
      state.counter -= 1;
    },
  },
});

export const { setIncreaseCounter, setDecreaseCounter } = counterSlice.actions;

export default counterSlice.reducer;

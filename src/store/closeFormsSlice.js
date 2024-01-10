import { createSlice } from "@reduxjs/toolkit";

export const closeFormsSlice = createSlice({
  name: "closeForms",
  initialState: {
    isBilling: false,
    isShipping: false,
  },

  reducers: {
    setIsBilling: (state, action) => {
      state.isBilling = action.payload;
    },

    setIsShipping: (state, action) => {
      state.isShipping = action.payload;
    },
  },
});

export const { setIsBilling, setIsShipping } = closeFormsSlice.actions;

export default closeFormsSlice.reducer;

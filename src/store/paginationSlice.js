import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    activePage: 1,
    totalSkip: 0,
  },

  reducers: {
    onPageSkip: (state, action) => {
      state.totalSkip = action.payload;
    },

    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { increaseSkip, decreaseSkip, onPageSkip, setActivePage } =
  paginationSlice.actions;

export default paginationSlice.reducer;

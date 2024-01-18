import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    activeBlogPage: 1,
    totalBlogSkip: 0,

    activeOrderPage: 1,
    totalOrderMinEl: 0,
    totalOrderMaxEl: 4,
  },

  reducers: {
    onBlogPageSkip: (state, action) => {
      state.totalBlogSkip = action.payload;
    },

    setActiveBlogPage: (state, action) => {
      state.activeBlogPage = action.payload;
    },

    setTotalOrder: (state, action) => {
      state.totalOrderMaxEl = action.payload.max;
      state.totalOrderMinEl = action.payload.min;
    },

    setActiveOrderPage: (state, action) => {
      state.activeOrderPage = action.payload;
    },
  },
});

export const {
  onBlogPageSkip,
  setActiveOrderPage,
  setActiveBlogPage,
  onOrderPageSkip,
  setTotalOrder,
} = paginationSlice.actions;

export default paginationSlice.reducer;

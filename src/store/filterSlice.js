import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    title: "",
    minPrice: 0,
    maxPrice: 50,
    filterType: "",
  },

  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },

    setPrice: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },

    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },

    setInStock: (state, action) => {
      if (action.payload === true) {
        state.inStock = action.payload;
      } else {
        delete state.inStock;
      }
    },

    setOnSale: (state, action) => {
      if (action.payload === true) {
        state.onSale = action.payload;
      } else {
        delete state.onSale;
      }
    },
  },
});

export const { setTitle, setPrice, setFilterType, setInStock, setOnSale } =
  filterSlice.actions;

export default filterSlice.reducer;

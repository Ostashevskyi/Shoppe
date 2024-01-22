import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    // catalog
    catalogTitle: "",
    minPrice: 0,
    maxPrice: 50,
    catalogCategory: "",

    //blog
    blogCategory: "",
    blogTitle: "",
  },

  reducers: {
    setCatalogTitle: (state, action) => {
      state.catalogTitle = action.payload;
    },

    setPrice: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },

    setCatalogCategory: (state, action) => {
      if (state.catalogCategory === action.payload) {
        state.catalogCategory = "";
      } else {
        state.catalogCategory = action.payload;
      }
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

    // blog reducers

    setBlogCategory: (state, action) => {
      if (state.blogCategory === action.payload) {
        state.blogCategory = "";
      } else {
        state.blogCategory = action.payload;
      }
    },

    setBlogTitle: (state, action) => {
      state.blogTitle = action.payload;
    },
  },
});

export const {
  setTitle,
  setPrice,
  setBlogCategory,
  setBlogTitle,
  setCatalogCategory,
  setCatalogTitle,
  setInStock,
  setOnSale,
} = filterSlice.actions;

export default filterSlice.reducer;

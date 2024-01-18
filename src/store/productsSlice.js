import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "@/database";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.from("products").select();

      if (error) {
        throw Error(error);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    status: "",
    error: "",
    products: [],
  },
  extraReducers: (builder) => {
    /// getAddresses
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(getProducts.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default productsSlice.reducer;

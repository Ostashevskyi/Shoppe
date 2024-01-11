import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../database";

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async (userID, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("shopping_cart")
        .select("")
        .eq("user_id", userID);

      if (error) {
        throw Error(error);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteShoppingCart = createAsyncThunk(
  "shoppingCart/deleteShoppingCart",
  async ({ userID, id }, { rejectWithValue, dispatch }) => {
    console.log(userID, id);
    try {
      const { error } = await supabase
        .from("shopping_cart")
        .delete()
        .eq("id", id, "user_id", userID);

      if (error) {
        throw Error(error);
      } else {
        return (await dispatch(getShoppingCart(userID))).payload;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    status: "",
    error: "",
    shoppingCart: [],
  },
  extraReducers: (builder) => {
    /// getAddresses
    builder.addCase(getShoppingCart.fulfilled, (state, action) => {
      state.shoppingCart = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getShoppingCart.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(getShoppingCart.pending, (state) => {
      state.status = "pending";
    });

    /// deleteAdress
    builder.addCase(deleteShoppingCart.fulfilled, (state, action) => {
      state.shoppingCart = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(deleteShoppingCart.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(deleteShoppingCart.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default shoppingCartSlice.reducer;

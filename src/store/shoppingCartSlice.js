import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../database";

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async ({ userID }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("shopping_cart")
        .select()
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
    try {
      const { data, error } = await supabase
        .from("shopping_cart")
        .delete()
        .eq("id", id, "user_id", userID);

      if (error) {
        throw Error(error);
      }

      await dispatch(getShoppingCartSubTotal({ userID }));

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getShoppingCartSubTotal = createAsyncThunk(
  "shoppingCart/getShoppingCartTotal",
  async ({ userID }, { rejectWithValue, dispatch }) => {
    try {
      const { data, error } = await supabase
        .from("shopping_cart")
        .select("total_price")
        .eq("user_id", userID);

      if (error) {
        throw Error(error);
      }

      const subtotalPrice = data
        .map((el) => Object.values(el))
        .flat()
        .reduce((prev, next) => prev + next);

      const shoppingCart = (await dispatch(getShoppingCart({ userID })))
        .payload;

      return { subtotalPrice, shoppingCart };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    getAddressesStatus: "",
    getTotalPriceStatus: "",
    error: "",
    shoppingCart: [],
    subTotalPrice: 0,
    shippingPrice: 5,
    totalPrice: 0,
  },
  extraReducers: (builder) => {
    /// getAddresses
    builder.addCase(getShoppingCart.fulfilled, (state, action) => {
      console.log("b");
      state.shoppingCart = action.payload;
      state.getAddressesStatus = "fulfilled";
    });
    builder.addCase(getShoppingCart.rejected, (state, action) => {
      state.error = action.payload;
      state.getAddressesStatus = "rejected";
    });
    builder.addCase(getShoppingCart.pending, (state) => {
      state.getAddressesStatus = "pending";
    });

    /// getTotalPrice
    builder.addCase(getShoppingCartSubTotal.fulfilled, (state, action) => {
      state.subTotalPrice = action.payload.subtotalPrice;
      state.totalPrice = action.payload.subtotalPrice + state.shippingPrice;
      state.shoppingCart = action.payload.shoppingCart;
      state.getTotalPriceStatus = "fulfilled";
    });
    builder.addCase(getShoppingCartSubTotal.rejected, (state, action) => {
      state.subTotalPrice = 0;
      state.totalPrice = 0;
      state.shoppingCart = action.payload.shoppingCart;
      state.getTotalPriceStatus = "rejected";
    });
  },
});

export default shoppingCartSlice.reducer;

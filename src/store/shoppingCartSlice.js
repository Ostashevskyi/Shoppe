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
      const { error } = await supabase
        .from("shopping_cart")
        .delete()
        .eq("id", id, "user_id", userID);

      if (error) {
        throw Error(error);
      }

      await dispatch(getShoppingCartSubTotal({ userID }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const delelteAllShoppingCart = createAsyncThunk(
  "shoppingCart/delteAllShoppingCart",
  async ({ userID }, { rejectWithValue }) => {
    try {
      const { error } = await supabase
        .from("shopping_cart")
        .delete()
        .eq("user_id", userID);

      if (error) {
        throw Error(error);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getShoppingCartSubTotal = createAsyncThunk(
  "shoppingCart/getShoppingCartTotal",
  async ({ userID }, { rejectWithValue }) => {
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

      return subtotalPrice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addShoppingCart = createAsyncThunk(
  "shoppingCart/addShoppingCart",
  async ({ userID, product }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("shopping_cart")
        .insert({
          name: product.title,
          quantity: 1,
          user_id: userID,
          price: product.isDiscount ? product.salePrice : product.price,
          total_price: product.isDiscount ? product.salePrice : product.price,
          slug: product.slug,
        })
        .select();

      if (error) {
        throw Error(error);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    getShoppingCartStatus: "",
    getTotalPriceStatus: "",
    addShoppingCartStatus: "",
    error: "",
    shoppingCart: [],
    subTotalPrice: 0,
    shippingPrice: 5,
    totalPrice: 0,
  },
  extraReducers: (builder) => {
    /// getAddresses
    builder.addCase(getShoppingCart.fulfilled, (state, action) => {
      state.shoppingCart = action.payload;
      state.getShoppingCartStatus = "fulfilled";
    });
    builder.addCase(getShoppingCart.rejected, (state, action) => {
      state.error = action.payload;
      state.getShoppingCartStatus = "rejected";
    });
    builder.addCase(getShoppingCart.pending, (state) => {
      state.getShoppingCartStatus = "pending";
    });

    /// getTotalPrice
    builder.addCase(getShoppingCartSubTotal.fulfilled, (state, action) => {
      state.subTotalPrice = action.payload;
      state.totalPrice = action.payload + state.shippingPrice;
      state.getTotalPriceStatus = "fulfilled";
    });
    builder.addCase(getShoppingCartSubTotal.rejected, (state, action) => {
      state.subTotalPrice = 0;
      state.totalPrice = 0;
      state.getTotalPriceStatus = "rejected";
    });

    /// addProduct
    builder.addCase(addShoppingCart.fulfilled, (state, action) => {
      state.shoppingCart = action.payload;
      state.addShoppingCartStatus = "fulfilled";
    });
    builder.addCase(addShoppingCart.rejected, (state, action) => {
      state.error = action.payload;
      state.addShoppingCartStatus = "rejected";
    });
    builder.addCase(addShoppingCart.pending, (state) => {
      state.addShoppingCartStatus = "pending";
    });
  },
});

export default shoppingCartSlice.reducer;

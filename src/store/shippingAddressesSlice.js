import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../database";

export const getShippingAddresses = createAsyncThunk(
  "shippingAddresses/getShippingAddresses",
  async (userID, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("shipping_addresses")
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

export const deleteShippingAddress = createAsyncThunk(
  "shippingAddresses/deleteShippingAddress",
  async ({ userID, id }, { rejectWithValue, dispatch }) => {
    try {
      const { error } = await supabase
        .from("shipping_addresses")
        .delete()
        .eq("id", id, "user_id", userID);

      if (error) {
        throw Error(error);
      } else {
        return (await dispatch(getShippingAddresses(userID))).payload;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const shippingAddressesSlice = createSlice({
  name: "shippingAddresses",
  initialState: {
    status: "",
    error: "",
    shippingAddresses: [],
  },
  extraReducers: (builder) => {
    /// getAddresses
    builder.addCase(getShippingAddresses.fulfilled, (state, action) => {
      state.shippingAddresses = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getShippingAddresses.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(getShippingAddresses.pending, (state) => {
      state.status = "pending";
    });

    /// deleteAdress
    builder.addCase(deleteShippingAddress.fulfilled, (state, action) => {
      state.billingAddresses = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(deleteShippingAddress.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(deleteShippingAddress.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default shippingAddressesSlice.reducer;

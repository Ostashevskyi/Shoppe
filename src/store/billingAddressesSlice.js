import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../database";

export const getBillingAddresses = createAsyncThunk(
  "billingAddresses/getBillingAddresses",
  async (userID, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("billing_addresses")
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

export const deleteBillingAddress = createAsyncThunk(
  "billingAddresses/deleteBillingAddresses",
  async ({ userID, id }, { rejectWithValue, dispatch }) => {
    try {
      const { error } = await supabase
        .from("billing_addresses")
        .delete()
        .eq("id", id, "user_id", userID);

      if (error) {
        throw Error(error);
      } else {
        return (await dispatch(getBillingAddresses(userID))).payload;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const billingAddressesSlice = createSlice({
  name: "billingAddresses",
  initialState: {
    status: "",
    error: "",
    billingAddresses: [],
  },
  extraReducers: (builder) => {
    /// getAddresses
    builder.addCase(getBillingAddresses.fulfilled, (state, action) => {
      state.billingAddresses = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getBillingAddresses.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(getBillingAddresses.pending, (state) => {
      state.status = "pending";
    });

    /// deleteAdress
    builder.addCase(deleteBillingAddress.fulfilled, (state, action) => {
      state.billingAddresses = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(deleteBillingAddress.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(deleteBillingAddress.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default billingAddressesSlice.reducer;

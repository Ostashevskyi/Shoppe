import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "@/database";
import { ordersNumberGenerator } from "../utils/ordersNumberGenerator";
import { getShippingAddresses } from "./shippingAddressesSlice";
import { getBillingAddresses } from "./billingAddressesSlice";
import {
  delelteAllShoppingCart,
  getShoppingCartSubTotal,
} from "./shoppingCartSlice";

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async ({ userID }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("orders")
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

export const putOrders = createAsyncThunk(
  "orders/putOrders",
  async (
    { userID, email, totalPrice, shoppingCart, subTotalPrice, shippingPrice },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const orderNumber = ordersNumberGenerator();

      const shippingAdresses = (await dispatch(getShippingAddresses(userID)))
        .payload;

      const defaultShippingAddress = shippingAdresses.filter(
        (el) => el.isDefault
      );

      const billingAddresses = (await dispatch(getBillingAddresses(userID)))
        .payload;

      const defaultBillingAddress = billingAddresses.filter(
        (el) => el.isDefault
      );

      if (!defaultBillingAddress.length || !defaultShippingAddress.length) {
        throw Error(
          "Can't create an order. First, you need to set the default shipping and billing addresses in your account"
        );
      }

      const { error, status } = await supabase.from("orders").insert({
        order_number: orderNumber,
        email: email,
        payment_method: defaultShippingAddress[0].preset_name,
        delivery_address: defaultBillingAddress[0].street_address,
        delivery_city: defaultBillingAddress[0].city,
        delivery_country: defaultBillingAddress[0].country,
        contact_phone: shippingAdresses[0].phone,
        user_id: userID,
        total: totalPrice,
        products: JSON.stringify(shoppingCart),
        subtotal_price: subTotalPrice,
        shipping_price: shippingPrice,
      });

      if (status === 201) {
        await dispatch(delelteAllShoppingCart({ userID }));
        await dispatch(getShoppingCartSubTotal({ userID }));
      }

      if (error) {
        throw Error(error);
      }

      return status;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrderByNumber = createAsyncThunk(
  "orders/getOrderByNumber",
  async ({ order_number }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select()
        .eq("order_number", order_number);

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
  name: "orders",
  initialState: {
    status: "",
    error: "",
    orders: [],
    orderByNumber: null,
  },
  extraReducers: (builder) => {
    /// orders
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(getOrders.pending, (state) => {
      state.status = "pending";
    });

    /// order by number
    builder.addCase(getOrderByNumber.fulfilled, (state, action) => {
      state.orderByNumber = action.payload;
      state.status = "fulfilled";
    });

    builder.addCase(putOrders.fulfilled, (state, action) => {
      state.error = "";
    });

    builder.addCase(putOrders.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;

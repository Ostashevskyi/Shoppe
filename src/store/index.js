import { configureStore } from "@reduxjs/toolkit";
import flterReducer from "@/store/filterSlice";
import paginationReducer from "@/store/paginationSlice";
import billingAddressesReducer from "@/store/billingAddressesSlice";
import shippingAddressesReducer from "@/store/shippingAddressesSlice";
import closeFormsSlice from "@/store/closeFormsSlice";

export const store = configureStore({
  reducer: {
    filter: flterReducer,
    pagination: paginationReducer,
    billingAddresses: billingAddressesReducer,
    shippingAddresses: shippingAddressesReducer,
    closeForm: closeFormsSlice,
  },
});

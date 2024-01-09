import { configureStore } from "@reduxjs/toolkit";
import flterReducer from "@/store/filterSlice";
import paginationReducer from "@/store/paginationSlice";
import billingAddressesReducer from "@/store/billingAddressesSlice";
import closeFormsSlice from "@/store/closeFormsSlice";

export const store = configureStore({
  reducer: {
    filter: flterReducer,
    pagination: paginationReducer,
    billingAddresses: billingAddressesReducer,
    closeForm: closeFormsSlice,
  },
});

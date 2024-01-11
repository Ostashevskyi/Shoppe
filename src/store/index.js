import { configureStore } from "@reduxjs/toolkit";

import flterReducer from "@/store/filterSlice";
import closeFormsSlice from "@/store/closeFormsSlice";
import paginationReducer from "@/store/paginationSlice";
import shoppingCartSlice from "@/store/shoppingCartSlice";
import billingAddressesReducer from "@/store/billingAddressesSlice";
import shippingAddressesReducer from "@/store/shippingAddressesSlice";

export const store = configureStore({
  reducer: {
    filter: flterReducer,
    pagination: paginationReducer,
    billingAddresses: billingAddressesReducer,
    shippingAddresses: shippingAddressesReducer,
    closeForm: closeFormsSlice,
    shoppingCart: shoppingCartSlice,
  },
});

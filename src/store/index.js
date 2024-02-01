import { configureStore } from "@reduxjs/toolkit";

import flterReducer from "@/store/filterSlice";
import closeFormsSlice from "@/store/closeFormsSlice";
import paginationReducer from "@/store/paginationSlice";
import shoppingCartSlice from "@/store/shoppingCartSlice";
import billingAddressesReducer from "@/store/billingAddressesSlice";
import shippingAddressesReducer from "@/store/shippingAddressesSlice";
import counterSlice from "@/store/counterSlice";
import productsSlice from "@/store/productsSlice";
import orderSlice from "@/store/orderSlice";
import reviewsSlice from "@/store/reviewsSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    filter: flterReducer,
    pagination: paginationReducer,
    billingAddresses: billingAddressesReducer,
    shippingAddresses: shippingAddressesReducer,
    closeForm: closeFormsSlice,
    shoppingCart: shoppingCartSlice,
    counter: counterSlice,
    products: productsSlice,
    orders: orderSlice,
    reviews: reviewsSlice,
    theme: themeSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import flterReducer from "@/store/filterSlice";
import paginationReducer from "@/store/paginationSlice";
import authSlice from "@/store/authSlice";

export const store = configureStore({
  reducer: {
    filter: flterReducer,
    pagination: paginationReducer,
    user: authSlice,
  },
});

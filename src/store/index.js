import { configureStore } from "@reduxjs/toolkit";
import flterReducer from "@/store/filterSlice";
import paginationReducer from "@/store/paginationSlice";

export const store = configureStore({
  reducer: {
    filter: flterReducer,
    pagination: paginationReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import flterReducer from "@/store/filterSlice";

export const store = configureStore({
  reducer: {
    filter: flterReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import productReducer from "./productSlice.js";
export const userStore = configureStore({
  reducer: {
    userData: userReducer,
    products: productReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
export const userStore = configureStore({
  reducer: {
    userData: userReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productData: [],
  cart: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      console.log(action.payload);
      state.productData = [...action.payload.data];
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    deleteCart: (state, action) => {},
  },
});

export default productSlice.reducer;
export const { getAllProducts, addToCart, deleteCart } = productSlice.actions;

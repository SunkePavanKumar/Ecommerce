import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
    deleteCart: (state, action) => {
      state.cart = state.cart.filter(
        (items) => items.product_name !== action.payload
      );
      toast.success("Item delete successfully");
    },
    decreaseQuantity: (state, action) => {
      console.log(action);
      let index = state.cart.findIndex(
        (item) => item.product_name === action.payload
      );
      let quantity = state.cart[index].quantity;
      if (quantity <= 1) {
        toast.error("Minimum Quantity is 1!");
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      console.log(action);
      let index = state.cart.findIndex(
        (item) => item.product_name === action.payload
      );
      let quantity = state.cart[index].quantity;
      if (quantity >= 8) {
        toast.error("Maximum Quantity is 8!");
      } else {
        state.cart[index].quantity += 1;
      }
    },
  },
});

export default productSlice.reducer;
export const {
  getAllProducts,
  addToCart,
  deleteCart,
  decreaseQuantity,
  increaseQuantity,
} = productSlice.actions;

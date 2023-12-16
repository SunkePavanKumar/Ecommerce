import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productData: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      console.log(action.payload);
      state.productData = [...action.payload.data];
    },
  },
});

export default productSlice.reducer;
export const { getAllProducts } = productSlice.actions;

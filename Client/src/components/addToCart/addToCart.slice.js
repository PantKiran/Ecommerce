import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  cart: [],
  quantity:0
};

const AddToCartSlice = createSlice({
  name: "addToCartSlice",
  initialState,
  reducers: {
    addProductToCart: (state,action) => {
      state.cart.push(action.payload)
    },
  },
});

export const { addProductToCart } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;

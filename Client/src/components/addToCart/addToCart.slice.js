import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
count:0
  
};

const AddToCartSlice = createSlice({
  name: "AddToCart",
  initialState,
  reducers: {
    
    addProductToCart:(state)=>{
      state.count = state.count+1
    }

  }
});

export const { addProductToCart} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;

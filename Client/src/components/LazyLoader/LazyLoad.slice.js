import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
 name:'kiran'
  
};

const LazyLoadSlice = createSlice({
  name: "LazyLoad",
  initialState,
  reducers: {
    
    changeName:(state,actions)=>{
      state.name = actions.payload
    }

  }
});

export const { changeName} = LazyLoadSlice.actions;
export default LazyLoadSlice.reducer;

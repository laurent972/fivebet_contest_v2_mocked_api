import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
   name:'name',
   initialState:{
      name: ''
   },
   reducers:{
      modifName: (state, action) => {
         const name = action.payload
         state.name = name
      }
   }
})

export const nameReducer = nameSlice.reducer;
export const {modifName} = nameSlice.actions;
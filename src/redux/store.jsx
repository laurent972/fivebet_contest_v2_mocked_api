import { configureStore } from "@reduxjs/toolkit";
import { nameReducer } from "./nameSlice";

export const store = configureStore({
   reducer: nameReducer
})
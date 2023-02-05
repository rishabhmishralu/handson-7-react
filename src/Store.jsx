import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice'
const store = configureStore({
    reducer : 
    {
        dataKey : dataReducer
    }}
);
export default store;
import { adminSlice } from "@/entities/admin";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    admins: adminSlice.reducer  
})
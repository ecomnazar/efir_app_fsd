import { adminSlice } from "@/entities/admin";
import { userSlice } from "@/entities/user";
import { categorySlice } from "@/entities/category"
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    adminSlice,
    userSlice,
    categorySlice
})
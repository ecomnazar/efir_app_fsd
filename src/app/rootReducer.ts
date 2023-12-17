import { adminSlice } from "@/entities/admin";
import { userSlice } from "@/entities/user";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    adminSlice,
    userSlice
})
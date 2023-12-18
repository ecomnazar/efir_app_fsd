import adminSlice from "@/entities/admin";
import userSlice from "@/entities/user";
import categorySlice from "@/entities/category"
import postSlice  from "@/entities/post"
import historySlice  from "@/entities/history"
import { combineReducers } from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
    adminSlice: adminSlice.default,
    userSlice: userSlice.default,
    categorySlice: categorySlice.default,
    postSlice: postSlice.default,
    historySlice: historySlice.default
})
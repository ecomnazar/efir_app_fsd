import { createSlice } from "@reduxjs/toolkit";
import { GAdmin } from "@/entities/admin/model/types"

export const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {
        admins: [] as GAdmin[]
    },
    reducers: {
    }
})
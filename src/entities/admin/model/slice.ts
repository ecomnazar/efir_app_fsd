import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GAdmin } from "@/entities/admin/model/types"
import { getAdmins } from "@/entities/admin/api/adminApi"

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {
        admins: {
            data: [] as GAdmin[],
            loading: false,
            error: false
        },
        admin: {
            data: {} as GAdmin,
            loading: false,
            error: false
        }
    },
    reducers: {},
    extraReducers(builder) {
        builder

            // get admins

            .addCase(getAdmins.pending, (state) => {
                state.admins.loading = true
            })
            .addCase(getAdmins.fulfilled, (state, action: PayloadAction<GAdmin[]>) => {
                state.admins.data = action.payload
                state.admins.loading = false
            })
            .addCase(getAdmins.rejected, (state) => {
                state.admins.error = true
            })

            // get admin by id
    },
    
})

export default adminSlice.reducer
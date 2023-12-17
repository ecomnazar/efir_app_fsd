import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GUser } from "@/entities/user/model/types"
import { getUsers, getUser } from "@/entities/user/api/userApi"

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: {
            data: [] as GUser[],
            loading: false,
            error: false
        },
        user: {
            data: {} as GUser,
            loading: false,
            error: false
        }
    },
    reducers: {
    },
    extraReducers(builder) {
        builder

            // get users

            .addCase(getUsers.pending, (state) => {
                state.users.loading = true
            })
            .addCase(getUsers.fulfilled, (state, action: PayloadAction<GUser[]>) => {
                state.users.data = action.payload
                state.users.loading = false
            })
            .addCase(getUsers.rejected, (state) => {
                state.users.error = true
            })

            // get user by id

            .addCase(getUser.pending, (state) => {
                state.user.loading = true
            })
            .addCase(getUser.fulfilled, (state, action: PayloadAction<GUser>) => {
                state.user.data = action.payload
                state.user.loading = false
            })
            .addCase(getUsers.rejected, (state) => {
                state.user.error = true
            })

    },
})

export default userSlice.reducer
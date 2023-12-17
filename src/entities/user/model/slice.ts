import { createSlice } from "@reduxjs/toolkit";
import { GUser } from "@/entities/user/model/types"

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
    }
})

export default userSlice.reducer
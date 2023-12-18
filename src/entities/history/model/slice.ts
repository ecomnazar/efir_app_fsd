import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getHistories } from "@/entities/history/api/historyApi"

const historySlice = createSlice({
    name: 'historySlice',
    initialState: {
        histories: {
            data: [] as any[],
            loading: false,
            error: false
        }
    },
    reducers: {},
    extraReducers(builder) {
        builder

            // get histories

            .addCase(getHistories.pending, (state) => {
                state.histories.loading = true
            })
            .addCase(getHistories.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.histories.data = action.payload
                state.histories.loading = false
            })
            .addCase(getHistories.rejected, (state) => {
                state.histories.error = true
            })
    },
})

export default historySlice.reducer
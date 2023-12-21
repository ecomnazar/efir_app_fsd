import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getHistories } from "@/entities/history/api/historyApi"
import { GHistory } from "@/entities/history/model/types"

const historySlice = createSlice({
    name: 'historySlice',
    initialState: {
        histories: {
            data: [] as GHistory[],
            loading: false,
            error: false,
            next: true
        }
    },
    reducers: {},
    extraReducers(builder) {
        builder

            // get histories

            .addCase(getHistories.pending, (state) => {
                state.histories.loading = true
            })
            .addCase(getHistories.fulfilled, (state, action: PayloadAction<{ next: string, results: GHistory[] }>) => {
                state.histories.data = action.payload.results
                state.histories.loading = false
                state.histories.next = action.payload.next ? true : false

            })
            .addCase(getHistories.rejected, (state) => {
                state.histories.error = true
            })
    },
})

export default historySlice.reducer
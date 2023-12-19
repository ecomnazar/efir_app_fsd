import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GCategory } from "@/entities/category/model/types"
import { getCategories } from "@/entities/category/api/categoryApi"

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: {
        categories: {
            data: [] as GCategory[],
            loading: false,
            error: false
        }
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCategories.pending, (state) => {
                state.categories.loading = true
            })
            .addCase(getCategories.fulfilled, (state, action: PayloadAction<{ results: GCategory[] }>) => {
                state.categories.data = action.payload.results
                state.categories.loading = false
            })
            .addCase(getCategories.rejected, (state) => {
                state.categories.error = true
            })
    },

})

export default categorySlice.reducer
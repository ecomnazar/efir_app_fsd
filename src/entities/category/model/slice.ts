import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GCategory } from "@/entities/category/model/types"
import { addCategory, deleteCategory, getCategories } from "@/entities/category/api/categoryApi"

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

            // get categories

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

            // add category

            .addCase(addCategory.fulfilled, (state, action: PayloadAction<GCategory>) => {
                state.categories.data = [...state.categories.data, action.payload]
            })

            // delete category

            .addCase(deleteCategory.fulfilled, (state, action: PayloadAction<string>) => {
                state.categories.data = state.categories.data.filter((category) => category.id !== action.payload)
                console.log(action.payload);
            })
    },

})

export default categorySlice.reducer
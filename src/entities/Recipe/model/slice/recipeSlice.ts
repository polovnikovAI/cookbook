import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchRecipeById } from '../services/fetchRecipeById/fetchRecipeById'
import { Recipe, RecipeSchema } from '../types/recipe'

const initialState: RecipeSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipeById.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchRecipeById.fulfilled, (state, action: PayloadAction<Recipe>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchRecipeById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: recipeActions } = recipeSlice
export const { reducer: recipeReducer } = recipeSlice

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addRecipeSchema } from '../types/addRecipeSchema'

const initialState: addRecipeSchema = {
    recipe: {
        cookBy: '',
        difficulty: 0,
        healthy: 0,
        id: '0',
        ingredients: [],
        nameFood: '',
        price: 0,
        recipe: [],
        timeCook: 0,
    },
    error: undefined,
}

export const addRecipeSlice = createSlice({
    name: 'addRecipe',
    initialState,
    reducers: {
        setCookBy: (state, action: PayloadAction<string>) => {
            state.recipe.cookBy = action.payload
        },
        setDifficulty: (state, action: PayloadAction<number>) => {
            state.recipe.difficulty = action.payload
        },
        setHealthy: (state, action: PayloadAction<number>) => {
            state.recipe.healthy = action.payload
        },
        setIngredients: (state, action: PayloadAction<string[]>) => {
            state.recipe.ingredients = action.payload
        },
        setRecipe: (state, action: PayloadAction<string[]>) => {
            state.recipe.recipe = action.payload
        },
        setNameFood: (state, action: PayloadAction<string>) => {
            state.recipe.nameFood = action.payload
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.recipe.price = action.payload
        },
        setTimeCook: (state, action: PayloadAction<number>) => {
            state.recipe.timeCook = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchRecipeById.pending, (state) => {
    //             state.error = undefined
    //             state.isLoading = true
    //         })
    //         .addCase(fetchRecipeById.fulfilled, (state, action: PayloadAction<Recipe>) => {
    //             state.isLoading = false
    //             state.data = action.payload
    //         })
    //         .addCase(fetchRecipeById.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.error = action.payload
    //         })
    // },
})

export const { actions: addRecipeActions } = addRecipeSlice
export const { reducer: addRecipeReducer } = addRecipeSlice

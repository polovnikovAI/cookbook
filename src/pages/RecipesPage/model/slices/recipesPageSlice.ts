import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Recipe } from 'entities/Recipe'
import { RecipesPageSchema } from '../types/recipesPageSchema'
import { fetchRecipes } from '../services/fetchRecipes/fetchRecipes'

const recipesPageAdapter = createEntityAdapter<Recipe>()

const initialState: RecipesPageSchema = recipesPageAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
})

export const getRecipes = recipesPageAdapter.getSelectors<StateSchema>(
    (state) => state.recipesPage || recipesPageAdapter.getInitialState(),
)

export const recipesPageSlice = createSlice({
    name: 'recipesPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
                state.isLoading = false
                recipesPageAdapter.setAll(state, action.payload)
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: recipesPageActions } = recipesPageSlice
export const { reducer: recipesPageReducer } = recipesPageSlice

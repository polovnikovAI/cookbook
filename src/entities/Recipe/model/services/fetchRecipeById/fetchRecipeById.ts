import { createAsyncThunk } from '@reduxjs/toolkit'
import { Recipe } from '../../types/recipe'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchRecipeById = createAsyncThunk<Recipe, string, ThunkConfig<string>>(
    'cookcard/fetchRecipeById',
    async (recipeId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<Recipe>(`/cards/${recipeId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('Рецепт не найден')
        }
    },
)

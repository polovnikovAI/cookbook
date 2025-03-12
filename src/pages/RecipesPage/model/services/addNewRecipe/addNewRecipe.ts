import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Recipe } from 'entities/Recipe'

export const addNewRecipe = createAsyncThunk<Recipe, string, ThunkConfig<string>>(
    'recipesPage/addNewRecipe',
    async (recipe, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.post<Recipe>(`/cards`, {
                nameFood: recipe,
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('Карточек не нашлось')
        }
    },
)

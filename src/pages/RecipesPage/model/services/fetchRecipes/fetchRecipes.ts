import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Recipe } from 'entities/Recipe'

export const fetchRecipes = createAsyncThunk<Recipe[], void, ThunkConfig<string>>(
    'recipesPage/fetchRecipes',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<Recipe[]>(`/cards`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('Карточек не нашлось')
        }
    },
)

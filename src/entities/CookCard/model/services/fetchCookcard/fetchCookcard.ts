import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICookCard } from '../../types/CookCard'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchCookcard = createAsyncThunk<ICookCard[], void, ThunkConfig<string>>(
    'cookcard/fetchCookcard',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<ICookCard[]>(`/cards`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('Карточек не нашлось')
        }
    },
)

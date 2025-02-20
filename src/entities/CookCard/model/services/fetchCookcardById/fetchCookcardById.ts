import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICookCard } from '../../types/CookCard'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchCookcardById = createAsyncThunk<ICookCard, string, ThunkConfig<string>>(
    'cookcard/fetchCookcardById',
    async (cookcardId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<ICookCard>(`/cards/${cookcardId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('Карточек не нашлось')
        }
    },
)

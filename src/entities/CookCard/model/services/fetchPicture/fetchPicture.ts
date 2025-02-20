import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'

export enum cookByPicture {
    knife = 'byKnife',
    microwave = 'byMicrowave',
    oven = 'byOven',
    pan = 'byPan',
    pot = 'byPot',
    nothing = 'byNothing',
    question = 'byQuestion',
}

export const fetchPicture = createAsyncThunk<string, string, ThunkConfig<string>>(
    'cookcard/fetchPicture',
    async (cookBy, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get(`/${cookBy}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('Карточек не нашлось')
        }
    },
)

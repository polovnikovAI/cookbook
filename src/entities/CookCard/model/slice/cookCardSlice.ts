import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CookCardSchema, ICookCard } from '../types/CookCard'
import { fetchCookcard } from '../services/fetchCookcard/fetchCookcard'

const initialState: CookCardSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
}

export const cookCardSlice = createSlice({
    name: 'cookcard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCookcard.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCookcard.fulfilled, (state, action: PayloadAction<ICookCard[]>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchCookcard.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: cookCardActions } = cookCardSlice
export const { reducer: cookCardReducer } = cookCardSlice

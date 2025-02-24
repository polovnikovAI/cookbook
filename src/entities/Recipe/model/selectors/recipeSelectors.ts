import { StateSchema } from 'app/providers/StoreProvider'

export const getRecipeData = (state: StateSchema) => state?.recipe?.data || undefined
export const getRecipeIsLoading = (state: StateSchema) => state?.recipe?.isLoading || false
export const getRecipeError = (state: StateSchema) => state?.recipe?.error || ''

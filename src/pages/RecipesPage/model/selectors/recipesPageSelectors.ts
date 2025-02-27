import { StateSchema } from 'app/providers/StoreProvider'

export const getRecipesPageIsLoading = (state: StateSchema) =>
    state?.recipesPage?.isLoading || false
export const getRecipesPageError = (state: StateSchema) => state?.recipesPage?.error

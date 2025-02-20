import { StateSchema } from 'app/providers/StoreProvider'

export const getCookcardData = (state: StateSchema) => state?.cookcard?.data || undefined
export const getCookcardIsLoading = (state: StateSchema) => state?.cookcard?.isLoading || false
export const getCookcardError = (state: StateSchema) => state?.cookcard?.error || ''

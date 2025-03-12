import { lazy } from 'react'

export const AddRecipeAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./AddRecipe')), 1500)
        }),
)

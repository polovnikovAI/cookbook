import { lazy } from 'react'

export const RecipeDetailsPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./RecipeDetailsPage')), 1500)
        }),
)

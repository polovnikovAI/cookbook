import { lazy } from 'react'

export const RecipePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./RecipePage')), 1500)
        }),
)

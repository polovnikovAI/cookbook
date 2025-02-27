import { lazy } from 'react'

export const RecipesPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./RecipesPage')), 300)
        }),
)

import { AxiosInstance } from 'axios'
import { RecipeSchema } from 'entities/Recipe'
import { RecipesPageSchema } from 'pages/RecipesPage'

export interface StateSchema {
    recipe: RecipeSchema
    recipesPage: RecipesPageSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}

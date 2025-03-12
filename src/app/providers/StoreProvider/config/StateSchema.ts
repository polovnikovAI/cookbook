import { AxiosInstance } from 'axios'
import { RecipeSchema } from 'entities/Recipe'
import { addRecipeSchema } from 'features/AddRecipe/model/types/addRecipeSchema'
import { RecipesPageSchema } from 'pages/RecipesPage'

export interface StateSchema {
    recipe: RecipeSchema
    recipesPage: RecipesPageSchema
    addRecipe: addRecipeSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}

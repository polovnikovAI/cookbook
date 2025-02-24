import { AxiosInstance } from 'axios'
import { RecipeSchema } from 'entities/Recipe'

export interface StateSchema {
    recipe: RecipeSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}

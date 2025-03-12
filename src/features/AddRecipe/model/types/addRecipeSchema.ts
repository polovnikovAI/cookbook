import { Recipe } from 'entities/Recipe'

export interface addRecipeSchema {
    recipe: Recipe
    error?: string
}

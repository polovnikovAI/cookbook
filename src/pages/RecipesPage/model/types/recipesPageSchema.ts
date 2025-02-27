import { EntityState } from '@reduxjs/toolkit'
import { Recipe } from 'entities/Recipe'

export interface RecipesPageSchema extends EntityState<Recipe, string> {
    isLoading?: boolean
    error?: string
}

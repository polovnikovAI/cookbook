export interface Recipe {
    id: string
    cookBy: string
    nameFood: string
    difficulty: number
    healthy: number
    timeCook: number
    price: number
    ingredients: string[]
    recipe: string[]
}

export interface RecipeSchema {
    data?: Recipe
    isLoading?: boolean
    error?: string
}

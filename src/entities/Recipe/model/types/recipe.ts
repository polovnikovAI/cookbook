export interface Recipe {
    id: string
    cookBy: string
    nameFood: string
    difficulty: number
    timeCook: number
    price: number
    ingredients: string[]
}

export interface RecipeSchema {
    data?: Recipe
    isLoading?: boolean
    error?: string
}

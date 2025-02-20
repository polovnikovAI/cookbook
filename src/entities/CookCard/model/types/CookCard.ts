export interface ICookCard {
    id: string
    cookBy: string
    nameFood: string
    difficulty: number
    timeCook: number
    price: number
    ingredients: string[]
}

export interface CookCardSchema {
    data?: ICookCard[]
    isLoading: boolean
    error?: string
}

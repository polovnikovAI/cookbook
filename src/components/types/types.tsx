export interface ICookCardProps {
    foodId: number;
    cookBy: string;
    nameFood: string;
    difficulty: number;
    timeCook: number;
    price?: number;
    ingredients: string[];
}

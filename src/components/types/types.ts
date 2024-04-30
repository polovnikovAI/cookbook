export interface ICookCardProps {
    foodId?: number;
    cookBy?: string;
    nameFood?: string;
    difficulty?: number;
    timeCook?: number;
    price?: number;
    ingredients?: string[];
}

export interface ICard {
    cookBy: string;
    nameFood: string;
    difficulty: number;
    timeCook: number;
    price: number;
    ingredients: string[];
}

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

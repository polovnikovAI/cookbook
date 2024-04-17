import { FC } from 'react';
import * as s from './CookCard.module.sass';
import byKnife from '@/assets/cookCardImages/byKnife.png';
import byPan from '@/assets/cookCardImages/byPan.png';

interface CookCardProps {
    foodId: number;
    cookBy: string;
    nameFood: string;
    difficulty: number;
    timeCook: number;
    ingredients: string[];
}

const CookCard: FC<CookCardProps> = (foodOptions: CookCardProps) => {
    let cookByImage: string;
    switch (foodOptions.cookBy) {
        case 'knife':
            cookByImage = byKnife;
            break;
        case 'pan':
            cookByImage = byPan;

        default:
            break;
    }
    return (
        <div className={s.cardWrapper}>
            <div className={s.cookBy}>
                <img
                    className={s.cookByImage}
                    src={cookByImage}
                    alt='НОЖ'
                />
            </div>
            <div className={s.nameFood}>{foodOptions.nameFood}</div>
            <div className={s.difficulty}>Сложность: {foodOptions.difficulty}</div>
            <div className={s.timeCook}>Время приготовления: {foodOptions.timeCook} минут</div>
            <div className={s.ingredients}>
                Ингредиенты :
                {foodOptions.ingredients.map((ingredient) => {
                    return <div style={{ paddingLeft: '20px' }}>{ingredient}</div>;
                })}
            </div>
        </div>
    );
};

export default CookCard;

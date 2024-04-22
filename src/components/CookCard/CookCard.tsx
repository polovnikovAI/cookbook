import { FC } from 'react';
import * as s from './CookCard.module.sass';
import byKnife from '@/assets/cookCardImages/byKnife.png';
import byPan from '@/assets/cookCardImages/byPan.png';
import byPot from '@/assets/cookCardImages/byPot.png';
import byMicrowave from '@/assets/cookCardImages/byMicrowave.png';
import byOven from '@/assets/cookCardImages/byOven.png';
import nothing from '@/assets/cookCardImages/nothing.png';
import question from '@/assets/cookCardImages/question.png';
import { ICookCardProps } from '../types/types';

interface CookCardProps {
    foodOptions: ICookCardProps;
}

const CookCard: FC<CookCardProps> = ({ foodOptions }) => {
    let cookByImage: string;
    switch (foodOptions.cookBy) {
        case 'knife':
            cookByImage = byKnife;
            break;
        case 'pan':
            cookByImage = byPan;
            break;
        case 'pot':
            cookByImage = byPot;
            break;
        case 'microwave':
            cookByImage = byMicrowave;
            break;
        case 'oven':
            cookByImage = byOven;
            break;
        case 'nothing':
            cookByImage = nothing;
            break;
        default:
            cookByImage = question;
            break;
    }
    return (
        <div className={s.cardWrapper}>
            <div className={s.cookBy}>
                <img
                    className={s.cookByImage}
                    src={cookByImage}
                    alt='cookByImage'
                />
            </div>
            <div className={s.nameFood}>{foodOptions.nameFood}</div>
            <div className={s.difficulty}>Сложность: {foodOptions.difficulty}</div>
            <div className={s.timeCook}>Время приготовления: {foodOptions.timeCook} мин.</div>
            {foodOptions.price ? <div className={s.price}>Цена: {foodOptions.price} руб.</div> : null}
            <div className={s.ingredients}>
                <div className={s.ingredientsTitle}>Ингредиенты :</div>
                {foodOptions.ingredients.map((ingredient) => {
                    return <div style={{ paddingLeft: '20px' }}>{ingredient}</div>;
                })}
            </div>
        </div>
    );
};

export default CookCard;

// КОМПОНЕНТ ОТРИСОВКИ КАРТОЧЕК ИЗ МАССИВА

import { FC, useEffect, useState } from 'react';
import CookCard from '@/components/CookCard/CookCard';
import { ICookCardProps } from '@/components/types/types';
import * as s from './PostCards.module.sass';

interface PostCardsProps {
    cards: ICookCardProps[];
}

const PostCards: FC<PostCardsProps> = ({ cards }) => {
    // useEffect(() => {
    //     cards.map((card) => <CookCard foodOptions={card} />);
    // }, [cards]);

    return (
        <div className={s.postCards}>
            <h1>CARDS</h1>
            {cards.map((card) => (
                <div>
                    <CookCard foodOptions={card} />
                </div>
            ))}
        </div>
    );
};
export default PostCards;

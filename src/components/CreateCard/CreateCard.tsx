// КОМПОНЕНТ СОЗДАНИЯ НОВОЙ ПОЛЬЗОВАТЕЛЬСКОЙ КАРТОЧКИ ИЗ ИНПУТОВ

import { ChangeEvent, FC, useState } from 'react';
import { ICard } from '../types/types';
import CookCard from '../CookCard/CookCard';
import * as s from './CreateCard.module.sass';

type CreateCardProps = {
    all_cards: ICard[];
};

const CreateCard: FC<CreateCardProps> = ({ all_cards }) => {
    const [cookBy, setCookBy] = useState<string>('');
    const [nameFood, setNameFood] = useState<string>('');
    const [difficulty, setDifficulty] = useState<number>();
    const [timeCook, setTimeCook] = useState<number>();
    const [price, setPrice] = useState<number>();
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [cards, setCards] = useState<ICard[]>([...all_cards]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const inputName = event.target.name;
        const value = event.target.value;

        if (inputName === 'cookby') {
            setCookBy(value);
        } else if (inputName === 'namefood') {
            setNameFood(value);
        } else if (inputName === 'difficulty') {
            setDifficulty(+value);
        } else if (inputName === 'timecook') {
            setTimeCook(+value);
        } else if (inputName === 'price') {
            setPrice(+value);
        } else if (inputName === 'ingredients') {
            setIngredients(value.split(','));
        }
    };

    const addCard = (): void => {
        const newCard = {
            cookBy: cookBy,
            nameFood: nameFood,
            difficulty: difficulty,
            timeCook: timeCook,
            price: price,
            ingredients: ingredients,
        };

        setCards([...cards, newCard]);

        setCookBy('');
        setNameFood('');
        setDifficulty(0);
        setTimeCook(0);
        setPrice(0);
        setIngredients([]);
    };

    return (
        <div>
            <h1>create card</h1>
            <input
                type='text'
                name='cookby'
                value={cookBy}
                placeholder='cook by'
                onChange={handleChange}
            />
            <input
                type='text'
                name='namefood'
                value={nameFood}
                placeholder='name of food'
                onChange={handleChange}
            />
            <input
                type='text'
                name='difficulty'
                value={difficulty}
                placeholder='difficulty'
                onChange={handleChange}
            />
            <input
                type='text'
                name='timecook'
                value={timeCook}
                placeholder='time to cook'
                onChange={handleChange}
            />
            <input
                type='text'
                name='price'
                value={price}
                placeholder='price of cook'
                onChange={handleChange}
            />
            <input
                type='text'
                name='ingredients'
                value={ingredients}
                placeholder='ingredients'
                onChange={handleChange}
            />
            <button onClick={addCard}>create card</button>
            <div className={s.cards}>
                {cards.map((card: ICard, key: number) => {
                    return (
                        <CookCard
                            key={key}
                            foodOptions={card}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CreateCard;

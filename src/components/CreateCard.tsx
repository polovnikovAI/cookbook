// КОМПОНЕНТ СОЗДАНИЯ НОВОЙ ПОЛЬЗОВАТЕЛЬСКОЙ КАРТОЧКИ ИЗ ИНПУТОВ

import { ChangeEvent, FC, useState } from 'react';
import { ICard, ICookCardProps } from './types/types';
import CookCard from './CookCard/CookCard';

const CreateCard: FC = () => {
    const [cookBy, setCookBy] = useState<string>('');
    const [nameFood, setNameFood] = useState<string>('');
    const [difficulty, setDifficulty] = useState<number>(0);
    const [timeCook, setTimeCook] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [cards, setCards] = useState<ICard[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const eventName = event.target.name;
        if (eventName === 'cookby') {
            setCookBy(event.target.value);
        } else if (eventName === 'namefood') {
            setNameFood(event.target.value);
        } else if (eventName === 'difficulty') {
            setDifficulty(+event.target.value);
        } else if (eventName === 'timecook') {
            setTimeCook(+event.target.value);
        } else if (eventName === 'price') {
            setPrice(+event.target.value);
        } else if (eventName === 'ingredients') {
            setIngredients(event.target.value.split(','));
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
            <div>
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

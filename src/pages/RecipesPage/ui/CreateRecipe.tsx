import { classNames } from 'shared/lib/classNames/classNames'

import { ChangeEvent, memo, useState } from 'react'

interface CreateRecipeProps {
    className?: string
}

export const CreateRecipe = memo((props: CreateRecipeProps) => {
    const { className } = props
    const [name, setName] = useState<string>()

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    if (!name) {
        alert('Блюдо не найдено')
    }
    return (
        <div>
            <span>Название рецепта: </span>
            <input
                placeholder='food name'
                value={name}
                onChange={onChangeInput}
            />
            <button onClick={() => alert(name)}>Отправить</button>
        </div>
    )
})

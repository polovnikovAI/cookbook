import { classNames } from 'shared/lib/classNames/classNames'
import cls from './RecipeDetails.module.scss'
import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { getRecipeData } from '../../model/selectors/recipeSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchRecipeById } from '../../model/services/fetchRecipeById/fetchRecipeById'
import { HStack, VStack } from 'shared/ui/Stack'

interface RecipeDetailsProps {
    className?: string
    id: string
}

export const RecipeDetails = memo((props: RecipeDetailsProps) => {
    const { className, id } = props
    const dispatch = useAppDispatch()
    const recipe = useSelector(getRecipeData)

    useEffect(() => {
        dispatch(fetchRecipeById(id))
    }, [dispatch, id])

    return (
        <VStack className={classNames(cls.RecipeDetails, {}, [className])}>
            <VStack className={cls.characteristics}>
                <HStack>
                    <Text
                        size={TextSize.XL}
                        title={recipe?.nameFood.toUpperCase()}
                        className={cls.nameFood}
                    />
                    <img
                        src={recipe?.cookBy}
                        className={cls.cookByImg}
                        alt='Готовить с ножом'
                    />
                </HStack>
                <VStack>
                    <Text
                        className={cls.difficulty}
                        size={TextSize.L}
                        text={`Сложность : ${recipe?.difficulty}`}
                    />
                    <Text
                        className={cls.info}
                        size={TextSize.L}
                        text={`Время приготовления : ${recipe?.timeCook} минут`}
                    />
                    <Text
                        className={cls.info}
                        size={TextSize.L}
                        text={`Цена : ${recipe?.price} руб.`}
                    />
                </VStack>
            </VStack>
            <VStack className={cls.characteristics}>
                <Text
                    className={cls.listTitle}
                    size={TextSize.L}
                    title={'Ингредиенты'}
                />
                {recipe?.ingredients.map((ingredient, index) => (
                    <div
                        className={cls.list}
                        key={index}
                    >
                        <Text
                            size={TextSize.L}
                            text={`${index + 1}. ${ingredient}`}
                        />
                    </div>
                ))}
            </VStack>
            <VStack>
                <Text
                    className={cls.listTitle}
                    size={TextSize.L}
                    title={'Приготовление'}
                />
                {recipe?.recipe.map((step, index) => (
                    <div
                        className={cls.list}
                        key={index}
                    >
                        <Text
                            size={TextSize.L}
                            text={`Шаг ${index + 1}. ${step}`}
                        />
                    </div>
                ))}
            </VStack>
        </VStack>
    )
})

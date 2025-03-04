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
        <HStack className={classNames(cls.RecipeDetails, {}, [className])}>
            <VStack>
                <Text
                    size={TextSize.XL}
                    title={recipe?.nameFood.toUpperCase()}
                />
                <img
                    src={recipe?.cookBy}
                    alt='Готовить с ножом'
                />
                <Text
                    size={TextSize.L}
                    text={`Сложность: ${recipe?.difficulty}`}
                />
                <Text
                    size={TextSize.L}
                    text={`Время приготовления: ${recipe?.timeCook}`}
                />
                <Text
                    size={TextSize.L}
                    text={`Цена: ${recipe?.price}`}
                />
            </VStack>
            <Text title='Ингредиенты' />
            <h3>
                {recipe?.recipe.map((str) => (
                    <li className={cls.ol}>
                        <Text title={str} />
                    </li>
                ))}
            </h3>
        </HStack>
    )
})

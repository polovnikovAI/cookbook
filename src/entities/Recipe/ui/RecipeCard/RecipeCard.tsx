import { classNames } from 'shared/lib/classNames/classNames'
import cls from './RecipeCard.module.scss'
import { HTMLAttributeAnchorTarget, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
    getRecipeData,
    getRecipeError,
    getRecipeIsLoading,
} from '../../model/selectors/recipeSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Flex } from 'shared/ui/Stack/Flex/Flex'
import { HStack } from 'shared/ui/Stack'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Recipe } from '../../model/types/recipe'
import { fetchRecipeById } from 'entities/Recipe/model/services/fetchRecipeById/fetchRecipeById'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CookCardProps {
    className?: string
    id: string
    target?: HTMLAttributeAnchorTarget
}

export const RecipeCard = memo((props: CookCardProps) => {
    const { className, id } = props
    const dispatch = useAppDispatch()
    const data = useSelector(getRecipeData)
    const error = useSelector(getRecipeError)
    // const isLoading = true
    const isLoading = useSelector(getRecipeIsLoading)

    useEffect(() => {
        dispatch(fetchRecipeById(id))
    }, [dispatch, id])

    const preventSavePicture = (e: React.MouseEvent<HTMLImageElement>) => e.preventDefault()

    let content

    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    border='50%'
                    width={100}
                    height={100}
                    className={cls.skeletonPicture}
                />
                <Skeleton
                    width={300}
                    height={50}
                    className={cls.skeleton}
                />
                <Skeleton
                    width={300}
                    height={50}
                    className={cls.skeleton}
                />
                <Skeleton
                    width={'100%'}
                    height={150}
                    className={cls.skeleton}
                />
                <Skeleton
                    width={'100%'}
                    height={150}
                    className={cls.skeleton}
                />
            </div>
        )
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={error as string}
            />
        )
    } else {
        content = (
            <Flex
                direction='column'
                gap='8'
                align='start'
                className={cls.cardWrapper}
                key={data?.id}
            >
                <div className={cls.cookBy}>
                    <img
                        className={cls.cookByImage}
                        src={data?.cookBy}
                        alt='cookByImage'
                        onContextMenu={preventSavePicture}
                    />
                </div>

                <div className={cls.nameFood}>{data?.nameFood}</div>
                <div className={cls.difficulty}>Сложность: {data?.difficulty}</div>
                <div className={cls.timeCook}>Время приготовления: {data?.timeCook} мин.</div>
                {data?.price && <div className={cls.price}>Цена: {data?.price} руб.</div>}
                <div className={cls.ingredients}>
                    <div className={cls.ingredientsTitle}>Ингредиенты :</div>
                    {data?.ingredients.map((ingredient) => {
                        return <div style={{ paddingLeft: '20px' }}>{ingredient}</div>
                    })}
                </div>
                <div className={cls.footer}>
                    <Button
                        className={cls.footerBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                    >
                        Смотреть рецепт
                    </Button>
                </div>
            </Flex>
        )
    }

    return (
        <HStack
            justify='center'
            className={classNames(cls.RecipeCard, {}, [className])}
        >
            {content}
        </HStack>
    )
})

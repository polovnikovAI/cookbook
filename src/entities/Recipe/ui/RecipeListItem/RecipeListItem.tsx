import { classNames } from 'shared/lib/classNames/classNames'
import cls from './RecipeListItem.module.scss'
import { memo, useCallback } from 'react'
import { Recipe } from '../../model/types/recipe'
import { Flex } from 'shared/ui/Stack/Flex/Flex'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface RecipeListItemProps {
    className?: string
    recipe: Recipe
}

export const RecipeListItem = memo((props: RecipeListItemProps) => {
    const { className, recipe } = props
    const navigate = useNavigate()

    const preventSavePicture = (e: React.MouseEvent<HTMLImageElement>) => e.preventDefault()

    const onOpenRecipe = useCallback(() => {
        navigate(RoutePath.recipe_details + recipe.id)
    }, [navigate, recipe.id])

    return (
        <div className={classNames(cls.RecipeListItem, {}, [className])}>
            <Flex
                direction='column'
                gap='8'
                align='start'
                className={cls.cardWrapper}
                key={recipe?.id}
            >
                <div className={cls.cookBy}>
                    <img
                        className={cls.cookByImage}
                        src={recipe?.cookBy}
                        alt='cookByImage'
                        onContextMenu={preventSavePicture}
                    />
                </div>

                <div className={cls.nameFood}>{recipe?.nameFood}</div>
                <div className={cls.difficulty}>Сложность: {recipe?.difficulty}</div>
                <div className={cls.timeCook}>Время приготовления: {recipe?.timeCook} мин.</div>
                {recipe?.price && <div className={cls.price}>Цена: {recipe?.price} руб.</div>}
                <div className={cls.ingredients}>
                    <div className={cls.ingredientsTitle}>Ингредиенты :</div>
                    {recipe?.ingredients.map((ingredient) => {
                        return <div style={{ paddingLeft: '20px' }}>{ingredient}</div>
                    })}
                </div>
                <div className={cls.footer}>
                    <Button
                        className={cls.footerBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        onClick={onOpenRecipe}
                    >
                        Смотреть рецепт
                    </Button>
                </div>
            </Flex>
        </div>
    )
})

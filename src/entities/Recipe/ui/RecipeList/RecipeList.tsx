import { classNames } from 'shared/lib/classNames/classNames'
import cls from './RecipeList.module.scss'
import { memo } from 'react'
import { Recipe } from '../../model/types/recipe'
import { RecipeListItem } from '../RecipeListItem/RecipeListItem'
import { Flex } from 'shared/ui/Stack/Flex/Flex'

interface RecipeListProps {
    className?: string
    recipes: Recipe[]
    isLoading?: boolean
}

export const RecipeList = memo((props: RecipeListProps) => {
    const { className, recipes, isLoading } = props

    const renderRecipe = (recipe: Recipe) => {
        return (
            <RecipeListItem
                recipe={recipe}
                key={recipe.id}
            />
        )
    }

    return (
        <Flex
            direction='row'
            justify='center'
            gap='32'
            className={classNames(cls.RecipeList, {}, [className])}
        >
            {recipes.length > 0 ? recipes.map(renderRecipe) : null}
        </Flex>
    )
})

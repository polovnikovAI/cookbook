import { RecipeList } from 'entities/Recipe/ui/RecipeList/RecipeList'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchRecipes } from '../model/services/fetchRecipes/fetchRecipes'
import { useSelector } from 'react-redux'
import { getRecipes } from '../model/slices/recipesPageSlice'
import {
    getRecipesPageError,
    getRecipesPageIsLoading,
} from '../model/selectors/recipesPageSelectors'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './RecipesPage.module.scss'
import { VStack } from 'shared/ui/Stack'

const RecipesPage = () => {
    const dispatch = useAppDispatch()
    const recipes = useSelector(getRecipes.selectAll)
    const isLoading = useSelector(getRecipesPageIsLoading)
    const error = useSelector(getRecipesPageError)

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch])

    return (
        <VStack
            align='center'
            className={classNames(cls.RecipesPage, {}, [])}
        >
            <h1>Рецепты</h1>
            <RecipeList
                isLoading={isLoading}
                recipes={recipes}
            />
        </VStack>
    )
}

export default RecipesPage

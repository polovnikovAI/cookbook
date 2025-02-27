import { RecipeCard } from 'entities/Recipe'
import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button } from 'shared/ui/Button/Button'
import cls from './RecipeDetailsPage.module.scss'
import { Flex } from 'shared/ui/Stack/Flex/Flex'

const RecipeDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    if (!id) {
        return <div>Рецепт не найден</div>
    }

    const onBackToList = useCallback(() => {
        navigate(RoutePath.recipes)
    }, [navigate])

    return (
        <div>
            <title>Рецепт</title>
            <Flex
                direction='row'
                justify='between'
                className={cls.RecipeDetailsPage}
            >
                <h1>Рецепт</h1>
                <Button onClick={onBackToList}>Назад к рецептам</Button>
            </Flex>

            <RecipeCard id={id} />
        </div>
    )
}

export default RecipeDetailsPage

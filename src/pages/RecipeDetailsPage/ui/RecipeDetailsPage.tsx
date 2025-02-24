import { RecipeCard } from 'entities/Recipe'
import { useParams } from 'react-router-dom'

const RecipeDetailsPage = () => {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <div>Рецепт не найден</div>
    }

    return (
        <div>
            RecipeDetails PAGE
            <RecipeCard id={id} />
        </div>
    )
}

export default RecipeDetailsPage

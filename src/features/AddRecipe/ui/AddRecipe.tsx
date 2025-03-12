import { classNames } from 'shared/lib/classNames/classNames'
import { ChangeEvent, memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { addRecipeActions } from '../model/slice/addRecipeSlice'
import { useSelector } from 'react-redux'
import { getAddRecipeNameFood } from '../model/selectors/addRecipeSelectors'
import { addNewRecipe } from 'pages/RecipesPage/model/services/addNewRecipe/addNewRecipe'
import { Recipe } from 'entities/Recipe'

interface AddRecipeProps {
    className?: string
    onSendRecipe?: (recipe: Recipe) => void
}

export const AddRecipe = memo((props: AddRecipeProps) => {
    const { className, onSendRecipe } = props
    const dispatch = useAppDispatch()
    const nameFood = useSelector(getAddRecipeNameFood)

    const onChangeInput = useCallback(
        (value: string | number | string[]) => {
            dispatch(addRecipeActions.setNameFood(String(value)))
        },
        [dispatch],
    )

    const onSendHandler = useCallback(() => {
        alert(nameFood)
        onChangeInput('')
    }, [nameFood, onChangeInput])

    const onSendNewRecipe = useCallback(
        (value: string) => {
            dispatch(addNewRecipe(value))
        },
        [dispatch],
    )

    const onSendNewRecipeHandler = useCallback(() => {
        onSendNewRecipe(nameFood)
    }, [nameFood, onSendNewRecipe])

    return (
        <div className={classNames('AddRecipe', {}, [className])}>
            {/* <span>Название рецепта: </span> */}
            <Input
                type='text'
                label='Название'
                value={nameFood}
                placeholder=' '
                onChange={onChangeInput}
            />
            <button onClick={onSendNewRecipeHandler}>Отправить</button>
        </div>
    )
})

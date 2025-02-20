import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CookCard.module.scss'
import { HTMLAttributeAnchorTarget, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
    getCookcardData,
    getCookcardError,
    getCookcardIsLoading,
} from '../../model/selectors/cookcardSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchCookcard } from '../../model/services/fetchCookcard/fetchCookcard'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Flex } from 'shared/ui/Stack/Flex/Flex'
import { HStack } from 'shared/ui/Stack'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CookCardProps {
    className?: string
    target?: HTMLAttributeAnchorTarget
}

export const CookCard = memo((props: CookCardProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const data = useSelector(getCookcardData)
    const error = useSelector(getCookcardError)
    const isLoading = useSelector(getCookcardIsLoading)

    useEffect(() => {
        dispatch(fetchCookcard())
    }, [dispatch])

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return (
            <Text
                theme={TextTheme.ERROR}
                title={error}
            />
        )
    }

    const preventSavePicture = (e: React.MouseEvent<HTMLImageElement>) => e.preventDefault()

    return (
        <HStack
            justify='center'
            className={classNames(cls.CookCard, {}, [className])}
        >
            {data?.map((food) => (
                <Flex
                    direction='column'
                    gap='8'
                    align='start'
                    className={cls.cardWrapper}
                    key={food.id}
                >
                    <div className={cls.cookBy}>
                        <img
                            className={cls.cookByImage}
                            src={food.cookBy}
                            alt='cookByImage'
                            onContextMenu={preventSavePicture}
                        />
                    </div>

                    <div className={cls.nameFood}>{food?.nameFood}</div>
                    <div className={cls.difficulty}>Сложность: {food?.difficulty}</div>
                    <div className={cls.timeCook}>Время приготовления: {food?.timeCook} мин.</div>
                    {food?.price && <div className={cls.price}>Цена: {food?.price} руб.</div>}
                    <div className={cls.ingredients}>
                        <div className={cls.ingredientsTitle}>Ингредиенты :</div>
                        {food?.ingredients.map((ingredient) => {
                            return <div style={{ paddingLeft: '20px' }}>{ingredient}</div>
                        })}
                    </div>
                    <div className={cls.footer}>
                        <Button>Смотреть рецепт</Button>
                    </div>
                </Flex>
            ))}
        </HStack>
    )
})

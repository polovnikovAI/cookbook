import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { HStack } from 'shared/ui/Stack'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTheme } from 'app/providers/ThemeProvider'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { theme, toggleTheme } = useTheme()
    return (
        <HStack
            justify={'center'}
            gap={'32'}
            max
            className={classNames(cls.Navbar, {}, [className])}
        >
            <AppLink
                to={RoutePath.main}
                className={cls.appName}
            >
                CookBook
            </AppLink>
            <Button
                theme={ButtonTheme.BACKGROUND}
                onClick={toggleTheme}
            >
                Сменить тему
            </Button>
            <div className={cls.links}>
                <AppLink
                    to={RoutePath.recipes}
                    className={cls.mainLink}
                >
                    РЕЦЕПТЫ
                </AppLink>
                <AppLink to={RoutePath.about}>О САЙТЕ</AppLink>
            </div>
        </HStack>
    )
}

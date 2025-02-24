import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RecipeDetailsPage } from 'pages/RecipeDetailsPage'
import { RecipePage } from 'pages/RecipePage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    RECIPE = 'recipe',
    RECIPE_DETAILS = 'recipe_details',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.RECIPE]: '/recipe',
    [AppRoutes.RECIPE_DETAILS]: '/recipe/', // + :id
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.RECIPE]: {
        path: RoutePath.recipe,
        element: <RecipePage />,
    },
    [AppRoutes.RECIPE_DETAILS]: {
        path: `${RoutePath.recipe_details}:id`,
        element: <RecipeDetailsPage />,
    },
}

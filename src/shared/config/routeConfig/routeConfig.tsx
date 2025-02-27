import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RecipeDetailsPage } from 'pages/RecipeDetailsPage'
import { RecipesPage } from 'pages/RecipesPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    RECIPES = 'recipes',
    RECIPE_DETAILS = 'recipe_details',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.RECIPES]: '/recipes',
    [AppRoutes.RECIPE_DETAILS]: '/recipes/', // + :id
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
    [AppRoutes.RECIPES]: {
        path: RoutePath.recipes,
        element: <RecipesPage />,
    },
    [AppRoutes.RECIPE_DETAILS]: {
        path: `${RoutePath.recipe_details}:id`,
        element: <RecipeDetailsPage />,
    },
}

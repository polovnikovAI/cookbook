import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { $api } from 'shared/api/api'
import { recipeReducer } from 'entities/Recipe'
import { recipesPageReducer } from 'pages/RecipesPage'
import { addRecipeReducer } from 'features/AddRecipe/model/slice/addRecipeSlice'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        recipe: recipeReducer,
        recipesPage: recipesPageReducer,
        addRecipe: addRecipeReducer,
    }

    const extraArg: ThunkExtraArg = {
        api: $api,
    }

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

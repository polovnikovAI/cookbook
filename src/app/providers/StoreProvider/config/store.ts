import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { $api } from 'shared/api/api'
import { cookCardReducer } from 'entities/CookCard'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        cookcard: cookCardReducer,
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

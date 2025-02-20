import { AxiosInstance } from 'axios'
import { CookCardSchema } from 'entities/CookCard'

export interface StateSchema {
    cookcard: CookCardSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}

import { type Country, type Currency } from 'shared/consts/commons/common';

export interface ProfileType {
    first: string
    lastname: string
    age: string
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
}

export interface ProfileSchema {
    data?: ProfileType
    error?: string
    isLoading: boolean
    readonly: boolean
}

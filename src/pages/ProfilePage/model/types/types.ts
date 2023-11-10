import { type Currency } from 'entities/Currency/model/types/currency';
import { type Country } from 'entities/Country/model/types/country';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileType {
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: ProfileType
    form?: ProfileType
    error?: string
    isLoading?: boolean
    readonly?: boolean
    validateError?: ValidateProfileError[]
}

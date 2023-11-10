import { type ProfileSchema, ValidateProfileError } from 'pages/ProfilePage/model/types/types';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from 'pages/ProfilePage/model/services/updateProfileData/updateProfileData';

const data = {
    first: 'Никита',
    lastname: 'Корнеев',
    age: 19,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
}

describe('loginSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false
        }

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });
    test('test ', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: '123'
            }
        }

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123456' })))
            .toEqual({
                form: {
                    username: '123456'
                }
            });
    })
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data, form: { username: '' }
        }

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data
            });
    });
    test('extra reducer pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateError: [ValidateProfileError.INCORRECT_USER_DATA],
            isLoading: false
        }

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateError: undefined
            });
    });
    test('extra reducer fulfulled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        }

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateError: undefined,
                readonly: true,
                form: data,
                data
            });
    });
})

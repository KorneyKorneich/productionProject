import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfile } from './validateProfile';
import { ValidateProfileError } from 'pages/ProfilePage/model/types/types';

describe('fetchProfileData.test', () => {
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
    test('success get data', async () => {
        const result = validateProfile(data);

        expect(result).toEqual([])
    });

    test('without first and last name', async () => {
        const result = validateProfile({
            ...data,
            first: '',
            lastname: ''
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ]);
    });
    test('without age', async () => {
        const result = validateProfile({
            ...data,
            age: undefined
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_AGE
        ]);
    });
    test('incorrect country', async () => {
        const result = validateProfile({
            ...data,
            country: undefined
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_COUNTRY
        ]);
    });
    test('no data', async () => {
        const result = validateProfile({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY
        ]);
    });
});

import { type StateSchema } from 'app/provider/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
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
    test('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {}
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

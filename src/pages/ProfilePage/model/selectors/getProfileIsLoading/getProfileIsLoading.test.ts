import { type StateSchema } from 'app/provider/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileData', () => {
    test('should return isLoading value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {}
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

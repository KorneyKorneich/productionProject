import { type StateSchema } from 'app/provider/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Some error'
            }
        };
        expect(getProfileError(state as StateSchema)).toEqual('Some error');
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});

import { type StateSchema } from 'app/provider/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileData', () => {
    test('should return Readonly value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {}
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});

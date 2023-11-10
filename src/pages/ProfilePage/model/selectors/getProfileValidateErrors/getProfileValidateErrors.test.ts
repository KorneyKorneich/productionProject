import { type StateSchema } from 'app/provider/StoreProvider';
import {
    getProfileValidateErrors
} from './getProfileValidateErrors';
import { ValidateProfileError } from 'pages/ProfilePage/model/types/types';

describe('getProfileData', () => {
    test('should return validate errors array', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.INCORRECT_USER_COUNTRY]
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(['INCORRECT_USER_COUNTRY']);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {}
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});

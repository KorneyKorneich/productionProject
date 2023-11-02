import { type StateSchema } from 'app/provider/StoreProvider';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'someName'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('someName');
    });
    test('with empty state should return empty string', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    })
})

import { type LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123'
        }

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('12345')))
            .toEqual({ username: '12345' });
    })
    test('set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123'
        }

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345')))
            .toEqual({ password: '12345' });
    })
})

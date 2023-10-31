import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/provider/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    test('with empty state should return empty string', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    })
})

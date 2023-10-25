import { type StateSchema } from 'app/provider/StoreProvider';

export const getLoginError = (state: StateSchema) => state.loginForm?.error;

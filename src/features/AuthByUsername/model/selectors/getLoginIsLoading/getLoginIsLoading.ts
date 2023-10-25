import { type StateSchema } from 'app/provider/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) => state.loginForm?.isLoading || false;

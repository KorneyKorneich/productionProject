import { type StateSchema } from 'app/provider/StoreProvider';

export const getAuthData = (state: StateSchema) => state.user.authData

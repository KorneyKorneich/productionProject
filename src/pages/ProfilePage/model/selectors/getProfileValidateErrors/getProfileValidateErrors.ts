import { type StateSchema } from 'app/provider/StoreProvider';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateError;

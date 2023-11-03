import { type StateSchema } from 'app/provider/StoreProvider';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;

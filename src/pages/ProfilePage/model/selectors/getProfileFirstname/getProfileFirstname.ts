import { type StateSchema } from 'app/provider/StoreProvider';

export const getProfileFirstname = (state: StateSchema) => state?.profile?.data?.first

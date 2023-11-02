import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/provider/StoreProvider';
import { type ProfileType } from '../../types/types';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            dispatch
        } = thunkAPI;
        try {
            const response = await extra.api.get<ProfileType>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);

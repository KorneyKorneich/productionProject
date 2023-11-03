import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/provider/StoreProvider';
import { type ProfileType } from '../../types/types';
import { useSelector } from 'react-redux';
import { getProfileForm } from 'pages/ProfilePage/model/selectors/getProfileForm/getProfileForm';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState,
            dispatch
        } = thunkAPI;

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<ProfileType>('/profile', formData);

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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/provider/StoreProvider';
import { type ProfileType, ValidateProfileError } from '../../types/types';
import { getProfileForm } from 'pages/ProfilePage/model/selectors/getProfileForm/getProfileForm';
import { validateProfile } from 'pages/ProfilePage/model/services/validateProfile/validateProfile';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState,
            dispatch
        } = thunkAPI;

        const formData = getProfileForm(getState());
        const errors = validateProfile(formData);

        if (errors.length > 0) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<ProfileType>('/profile/' + formData?.id, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);

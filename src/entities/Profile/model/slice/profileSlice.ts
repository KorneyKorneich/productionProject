import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ProfileSchema, type ProfileType } from '../types/types';
import { fetchProfileData } from 'entities/Profile';

const initialState: ProfileSchema = {
    readonly: true,
    data: undefined,
    error: undefined,
    isLoading: false
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

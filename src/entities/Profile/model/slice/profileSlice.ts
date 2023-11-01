import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from '../types/types';

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
    }
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

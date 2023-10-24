import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from '../../model/type/LoginSchema';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
    error: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        incorrectLogin: (state) => {
            state.username = '';
            state.password = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;

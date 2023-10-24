import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage/localStorage';
import { userActions } from '../../../../../entities/User/model/slice/userSlice';
import { type User } from '../../../../../entities/User/model/types/user';

interface loginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData: loginByUsernameProps, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(i18n.t('Введен неверный логин или пароль '));
        }
    }
);

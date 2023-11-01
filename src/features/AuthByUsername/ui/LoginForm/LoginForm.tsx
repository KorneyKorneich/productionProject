import React, { memo, useCallback, useEffect } from 'react';
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamycModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}
const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password })).then((result) => {
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        });
    }, [onSuccess, dispatch, password, username]);

    useEffect(() => {
        if (error) {
            dispatch(loginActions.incorrectLogin());
        }
    }, [dispatch, error]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount={true}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')}/>
                {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR}/>}
                <Input
                    type={'text'}
                    className={cls.input}
                    placeholder={t('Логин')}
                    autofocus={true}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type={'text'}
                    className={cls.input}
                    placeholder={t('Пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.inputBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});

LoginForm.displayName = 'LoginForm';
export default LoginForm;

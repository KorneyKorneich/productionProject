import React from 'react';
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import Input from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type={'text'} className={cls.input} placeholder={t('Логин')} autofocus={true}/>
            <Input type={'text'} className={cls.input} placeholder={t('Пароль')}/>
            <Button className={cls.inputBtn}>{t('Войти')}</Button>
        </div>
    );
};

export default LoginForm;

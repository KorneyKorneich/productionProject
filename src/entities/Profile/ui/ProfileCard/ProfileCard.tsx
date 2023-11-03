import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { type ProfileType } from 'entities/Profile';
import Loader from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import { type Mods } from 'widgets/Modal/ui/Modal';
import { type Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';

import { type Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string
    data?: ProfileType
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname: (value?: string) => void
    onChangeLastname: (value?: string) => void
    onChangeAge: (value?: string) => void
    onChangeCity: (value?: string) => void
    onChangeUsername: (value?: string) => void
    onChangeAvatar: (value?: string) => void
    onChangeCurrency: (value: Currency) => void
    onChangeCountry: (value: Country) => void
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.Loading, {}, [className])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.Error, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла непредвиденная ошибка')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                <div className={cls.avatarWrapper}>
                    <Avatar size={100} src={data?.avatar}
                    />
                </div>

                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Ввведите имя пользователя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Ссылка на аватарку')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    readonly={readonly}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    readonly={readonly}
                    onChange={onChangeCountry}
                />

            </div>
        </div>
    );
};

export default ProfileCard;

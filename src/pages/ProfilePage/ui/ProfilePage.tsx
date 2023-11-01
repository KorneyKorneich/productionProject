import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamycModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
    className?: string
}

const redusers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile Page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;

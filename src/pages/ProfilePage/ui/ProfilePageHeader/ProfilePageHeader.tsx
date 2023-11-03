import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'pages/ProfilePage/model/selectors/getProfileReadonly/getProfileReadonly';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'pages/ProfilePage/model/slice/profileSlice';
import { updateProfileData } from 'pages/ProfilePage/model/services/updateProfileData/updateProfileData';

interface ProfilePageHeaderProps {
    className?: string
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])
    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')}/>
            {readonly
                ? (<Button
                    className={cls.editBtn} theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>)
                : (
                    <>
                        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить изменения')}
                        </Button>
                        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>
                )
            }
        </div>
    );
};

export default ProfilePageHeader;

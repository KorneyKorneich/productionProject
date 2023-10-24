import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const authData = useSelector(getAuthData);
    const dispatch = useDispatch();

    const onClose = useCallback(() => {
        setIsAuthOpen(false);
    }, [])
    const onShowModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>{t('Выйти')}</Button>
                </div>
            </div>
        )
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED}>{t('Войти')}</Button>
                <LoginModal isOpen={isAuthOpen} onClose={onClose}/>
            </div>
        </div>
    )
}

export default Navbar

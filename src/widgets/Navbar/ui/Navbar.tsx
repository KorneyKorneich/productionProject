import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onClose = useCallback(() => {
        setIsAuthOpen(false);
    }, [])
    const onShowModal = useCallback(() => {
        setIsAuthOpen(true);
    }, [])

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

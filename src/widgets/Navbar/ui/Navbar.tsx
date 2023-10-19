import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next'
import Modal from 'widgets/Modal';
import { ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthOpen(prevState => !prevState);
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED}>{t('Войти')}</Button>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isAuthOpen} onClose={onToggleModal} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consequatur dolor, doloremque ducimus eligendi ex facilis fugit illum ipsam, minus nemo non perferendis quo ratione repellat vel! Ad, aliquid.</Modal>

            </div>
        </div>
    )
}

export default Navbar

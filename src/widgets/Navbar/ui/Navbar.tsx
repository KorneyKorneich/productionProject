import React from 'react'
import { classNames } from 'app/shared/lib/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >{t('О нас')}</AppLink>
            </div>

        </div>
    )
}

export default Navbar

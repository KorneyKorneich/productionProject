import React from 'react';
import {classNames} from "app/shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import ThemeSwitcher from "widgets/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps{
    className?: string;
}


const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    className={cls.mainLink}
                theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >About</AppLink>
            </div>

        </div>
    );
};

export default Navbar;



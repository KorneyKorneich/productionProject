import React from 'react';
import {classNames} from "app/shared/lib/classNames";
import cls from './Applink.module.scss'
import {ReactFC} from "../../../../config/build/types/childrenType";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme{
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme: AppLinkTheme;
    [key: string]: unknown;
}


// @ts-ignore
export const AppLink: ReactFC<AppLinkProps> = (props) => {
    const {to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY} = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}

        </Link>
    );
};

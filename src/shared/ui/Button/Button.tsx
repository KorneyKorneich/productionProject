import React, { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props
    return (
        <button className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
            {...otherProps}>
            {children}
        </button>

    )
}

export default Button

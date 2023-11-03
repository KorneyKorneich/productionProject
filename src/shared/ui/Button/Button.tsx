import React, { type ButtonHTMLAttributes, type FC, memo } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import cls from './Button.module.scss'
import { type Mods } from 'widgets/Modal/ui/Modal';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    CLEAR_INVERTED = 'clearInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled
    }

    return (
        <button className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}>
            {children}
        </button>

    )
})

export default Button

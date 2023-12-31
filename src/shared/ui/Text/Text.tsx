import React from 'react';
import cls from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { type Mods } from 'widgets/Modal/ui/Modal';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}
export enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            <p className={cls.title}>{title}</p>
            <p className={cls.text}>{text}</p>
        </div>
    );
};

export default Text;

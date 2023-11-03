import React, { type CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss'
import { useTranslation } from 'react-i18next';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties >(() => {
        return {
            width: size,
            height: size
        }
    }, [size])

    return (
        <img className={classNames(cls.Avatar, {}, [className])}
            src={src}
            style={styles}
            alt={alt}
        />

    );
};

export default Avatar;

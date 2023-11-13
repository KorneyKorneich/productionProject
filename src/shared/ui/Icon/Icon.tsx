import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

const Icon = ({ className, Svg }: IconProps) => {
    return (
        <Svg className={classNames(cls.Icon, {}, [className])}>

        </Svg>
    );
};

export default Icon;

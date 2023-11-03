import React, { type ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss'
import { useTranslation } from 'react-i18next';
import { type Mods } from 'widgets/Modal/ui/Modal';

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOptions[]
    value?: string
    readonly?: boolean
    onChange?: (value: string) => void
}

const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange
    } = props

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {

    }
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});

export default Select;

import React, { type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autofocus?: boolean
}

// eslint-disable-next-line react/display-name
const Input = memo((props: InputProps) => {
    const {
        onChange,
        className,
        value,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const onBlur = () => {
        setIsFocused(false)
    }
    const onFocus = () => {
        setIsFocused(true)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {
                placeholder && (<div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>)
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    value={value}
                    type={type}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}

            </div>
        </div>
    );
});

export default Input;

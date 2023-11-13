import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss'
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import CopyCode from 'shared/assets/icons/copyCode-20-20.svg'

interface CodeProps {
    className?: string
    text: string
}

const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text])
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} onClick={onCopy} theme={ButtonTheme.CLEAR} >
                <CopyCode className={cls.copyIcon}/>
            </Button>
            <code>
                {text}
            </code>
        </pre>

    );
};

export default Code;

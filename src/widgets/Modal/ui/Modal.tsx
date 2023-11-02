import React, { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui';
import { useTheme } from 'app/provider/ThemeProvider';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export type Mods = Record<string, boolean | string | undefined>;

const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props;

    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const ANIMATION_DELAY = 300;
    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState<boolean | undefined>(false);

    useEffect(() => {
        setIsMounted(isOpen);
    }, [isOpen]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if (isOpen) {
            addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content}
                        onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;

import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'widgets/Modal';
import { LoginFormAsync } from '../../ui/LoginForm/LoginForm.async';
import Loader from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />} >
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};

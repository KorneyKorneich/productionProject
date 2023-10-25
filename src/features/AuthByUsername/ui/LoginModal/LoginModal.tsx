import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LoginForm from '../LoginForm/LoginForm';
import Modal from 'widgets/Modal';

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
            <LoginForm />
        </Modal>
    );
};
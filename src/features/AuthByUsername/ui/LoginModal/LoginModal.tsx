import React from 'react';
// import cls from './LoginModal.module.scss'
// import { classNames } from 'shared/lib/classNames/classNames';
import LoginForm from '../LoginForm/LoginForm';
import Modal from 'widgets/Modal';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => {
    return (
        <Modal
            // className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;

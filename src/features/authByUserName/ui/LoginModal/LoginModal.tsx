import cn from 'classnames';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { LoginFormAsync } from '../loginForm/LoginFormAsync';
import style from './LoginModal.module.scss';
import {Suspense} from "react";
import {Loader} from "shared/ui/Loader/Loader";

interface LoginModalProps {
    className?: string;
	isOpen: boolean,
	onClose?: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={cn(style.LoginModal, className)}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader/>}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);

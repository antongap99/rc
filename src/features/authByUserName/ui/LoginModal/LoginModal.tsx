import cn from 'classnames';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { LoginForm } from '../loginForm/LoginForm';
import style from './LoginModal.module.scss';

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
        <LoginForm />
    </Modal>
);

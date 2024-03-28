import { ReactNode } from 'react';
import cn from 'classnames';
import style from './Modal.module.scss';

export interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose? : () => void,
}
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const mods: Record<string, boolean> = {
        [style.opened]: isOpen,
    };

    return (
        <div className={cn(style.Modal, className, mods)}>
            <div className={style.overlay}>
                <div className={style.content}>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    );
};

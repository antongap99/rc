import {
    ReactNode, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import cn from 'classnames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/themeProvider';
import style from './Modal.module.scss';

export interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose? : () => void,
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [style.opened]: !!isOpen,
	    [style.isClosing]: isClosing,
    };

    const closeHandler = (event: SyntheticEvent<HTMLDivElement>) => {
	    if (!event.target) return;
        const target = event.target as HTMLDivElement;

        if (target.classList.contains(style.overlay)) {
	        setIsClosing(true);

	        timeRef.current = setTimeout(() => {
                onClose?.();
		        setIsClosing(false);
	        }, ANIMATION_DELAY);
        }
    };

    useEffect(() => {
	    const keyDownHandler = (event: KeyboardEvent) => {
		    if (event.key === 'Escape') {
			    onClose?.();
		    }
	    };

        if (isOpen) {
            window.addEventListener('keydown', keyDownHandler);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [onClose, isOpen]);

    return (
        <Portal>
            <div className={cn(style.Modal, className, mods)}>
                <div className={style.overlay} onClick={closeHandler}>
                    <div className={cn(style.content)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

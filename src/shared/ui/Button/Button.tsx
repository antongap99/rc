import cn from 'classnames';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import style from './Button.module.scss';

export enum ThemeBottom {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeBottom
    children: ReactNode
}
export const Button = (props: ButtonProps) => {
    const {
        theme, className, children, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={cn(style.Button, theme, className)}
            {...otherProps}
        >
            {children}
        </button>
    );
};

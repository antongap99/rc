import cn from 'classnames';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import style from './Button.module.scss';

export enum ThemeBottom {
    CLEAR = 'clear',
    OUTLINE = 'outline'
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

    const buttonTheme = theme && style[theme]
    return (
        <button
            type="button"
            className={cn(style.Button, buttonTheme, className, 'button_style')}
            {...otherProps}
        >
            {children}
        </button>
    );
};

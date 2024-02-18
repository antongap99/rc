import cn from "classnames";
import style from './Button.module.scss'
import {ButtonHTMLAttributes, ReactNode} from "react";

export enum ThemeBottom  {
    CLEAR = 'clear',

}


interface  ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeBottom;
    children: ReactNode
}

export const Button = (props: ButtonProps) =>{
    const {theme, className, children,  ...otherProps } = props;
    return  (
        <button
            className={cn(style.Button, theme)} {...otherProps}
        >
            {children}
        </button>
    )
}


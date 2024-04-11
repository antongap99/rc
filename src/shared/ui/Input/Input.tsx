import cn from 'classnames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import style from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps{
    className?: string;
	value?: string,
	onChange?: (value: string) => void
	type: 'text' | 'submit' | 'password' | 'range' | 'file'
	placeHolder?: string,
	autoFocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
	    placeHolder,
	    autoFocus = false,
	    ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cn(style.InputWrapper, className)}>
            {placeHolder && (
                <div className={style.placeHolder}>
                    {`${placeHolder}>`}
                </div>
            )}
            <input
                className={style.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                ref={inputRef}
                {...otherProps}
            />
        </div>
    );
});

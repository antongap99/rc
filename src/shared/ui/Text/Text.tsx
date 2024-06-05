import style from './Text.module.scss';
import cn from "classnames";

export enum TextTheme {

}

interface TextProps {
    className?: string;
    title?: string;
    text?: string
    theme?: TextTheme,
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
    } = props
    return (
        <div className={cn(style.Text, className)}>
            {title && <p className={style.title}>{title}</p>}
            {text && <p className={style.text}>{text}</p>}
        </div>
    )
};

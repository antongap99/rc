import cn from 'classnames';
import style from './Text.module.scss';

interface TextProps {
    className?: string;
	title?: string,
	text?: string,
}

export const Text = (props: TextProps) => {
    const { className, title, text } = props;
    return (
        <div className={cn(style.Text, className)}>
            {title && <p className={style.title}>{title}</p>}
        </div>
    );
};

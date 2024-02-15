import cn from "classnames";
import style from './Button.module.scss'

interface  ButtonProps {
    className?: string;

}

export const Button = ({className}: ButtonProps) =>{
    return  (
        <div className={cn(style.Button)}>
        </div>
    )
}


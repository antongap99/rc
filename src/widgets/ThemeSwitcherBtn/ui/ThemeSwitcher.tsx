import cn from "classnames";
import style from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/themeProvider";
import ThemeSvg from "shared/assets/icons/theme-svg.svg"
import {Button, ThemeBottom} from "shared/ui/Button/Button";

interface  ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) =>{
    const {theme, toggleTheme} = useTheme();
    return  (
        <Button theme={ThemeBottom.CLEAR} className={cn(style.ThemeSwitcher, className)} onClick={toggleTheme}>
            <ThemeSvg/>
        </Button>
    )
}


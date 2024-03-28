import cn from "classnames";
import style from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/themeProvider";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Theme} from "app/providers/themeProvider/lib/theme/ThemeContext";
import DarkIcon from 'shared/assets/icons/darkSvg.svg'
import LightIcon from 'shared/assets/icons/lightSvg.svg'
interface  ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) =>{
    const { theme, toggleTheme} = useTheme();
    return  (
        <Button theme={ButtonTheme.CLEAR} className={cn(className)} onClick={toggleTheme}>
            {theme  === Theme.Dark ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
}


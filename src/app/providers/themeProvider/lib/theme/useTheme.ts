import {Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

export interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'
export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme  = theme === Theme.Dark ? Theme.Light : Theme.Dark
        setTheme && setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }


    return {
        theme,
        toggleTheme
    }
}

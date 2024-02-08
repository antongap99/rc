import {FC, PropsWithChildren, ReactNode, useMemo, useState} from "react";
import {Theme, ThemeContext} from "./ThemeContext";
import {LOCAL_STORAGE_THEME_KEY, useTheme} from "./useTheme";

interface  ThemeProviderProps {
    children: ReactNode
}


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
            theme , setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
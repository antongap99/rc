import { createContext } from 'react';

interface ThemeContextProps {
    theme:Theme,
    setTheme?: (theme:Theme) => void
}

export enum Theme {
    Light = 'app_light_theme',
    Dark = 'app_dark_theme'
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.Light });

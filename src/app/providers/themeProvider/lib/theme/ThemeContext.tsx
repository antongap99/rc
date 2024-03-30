import { createContext } from 'react';

interface ThemeContextProps {
    theme:Theme,
    setTheme?: (theme:Theme) => void
}

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.Light });

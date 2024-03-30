import {
    FC, PropsWithChildren, ReactNode, useMemo, useState,
} from 'react';
import { Theme, ThemeContext } from './lib/theme/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY, useTheme } from './lib/theme/useTheme';

interface ThemeProviderProps {
	defaultTheme?: Theme.Light
}

const defaultStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ children, defaultTheme }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme || defaultStorageTheme);

    const defaultProps = useMemo(() => ({
        theme, setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

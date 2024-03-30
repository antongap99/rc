import {
    FC, PropsWithChildren, ReactNode, useMemo, useState,
} from 'react';
import { Theme, ThemeContext } from './lib/theme/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from './lib/theme/useTheme';

interface ThemeProviderProps {
    children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

const ThemeProvider: FC<PropsWithChildren> = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

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

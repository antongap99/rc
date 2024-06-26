import { Suspense, useState } from 'react';
import cn from 'classnames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { useTheme } from './providers/themeProvider';
import 'shared/config/i18nConfig/i18n';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={cn('app', theme)}>
            <Suspense fallback="...перевод">
                <Navbar />
                <div className="content-page">
                    <AppRouter />
                    <SideBar />
                </div>
            </Suspense>
        </div>
    );
};

export default App;

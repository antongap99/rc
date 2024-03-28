import { Suspense } from 'react';
import './styles/index.scss';
import cn from 'classnames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useTheme } from './providers/themeProvider';
import 'shared/config/i18nConfig/i18n';
import { Modal } from 'shared/ui/Modal/ui/Modal';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn('app', theme)}>
            <Suspense fallback="...перевод">
                <Navbar />
                <Modal />
                <div className="content-page">
                    <AppRouter />
                    <SideBar />
                </div>
            </Suspense>
        </div>
    );
};

export default App;

import {Suspense} from 'react';
import './styles/index.scss'
import cn from 'classnames';
import {useTheme} from "./providers/themeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/NavBar";
import {ThemeSwitcher} from "widgets/ThemeSwitcherBtn";


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={cn('app', theme)}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;
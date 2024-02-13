import {Suspense} from 'react';
import './styles/index.scss'
import { Route, Routes} from 'react-router-dom'
import {MainPageAsync} from 'pages';
import {AboutPageAsync} from "pages";
import cn from 'classnames';
import {useTheme} from "./providers/themeProvider";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn('app', theme)}>
            <h1>React App</h1>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
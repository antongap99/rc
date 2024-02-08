import {Suspense} from 'react';
import './style/index.scss'
import { Route, Routes} from 'react-router-dom'
import {MainPageAsync} from "./pages/mainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/aboutPage/AboutPageAsync";

import cn from 'classnames';
import {useTheme} from "./context/theme/useTheme";
import {classNames} from "./helpers/ClassNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    console.log(classNames('app', {'hover': true}, ['apps']))
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
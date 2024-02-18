import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/themeProvider";


const root = createRoot( document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter basename="/">
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);
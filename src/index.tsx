import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./context/theme/Provider";


const root = createRoot( document.getElementById('root'));
root.render(
    <BrowserRouter basename="/">
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);
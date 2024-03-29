import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import { ThemeProvider } from './app/providers/themeProvider';
import {StoreProvider} from "app/providers/storeProvider/ui/StoreProvider";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter basename="/">
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);

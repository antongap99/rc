import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/storeProvider';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/themeProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter basename="/">
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <StrictMode>
                        <App />
                    </StrictMode>
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);

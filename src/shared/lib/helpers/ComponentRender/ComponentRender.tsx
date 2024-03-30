import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18nConfig/i18nForTest';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

export interface ComponentRenderOptions {
    route?: string
}

export const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};

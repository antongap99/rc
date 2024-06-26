import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18nConfig/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/storeProvider';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export interface ComponentRenderOptions {
    route?: string,
	initialState?: StateSchema
}

export const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        route = '/',
	    initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};

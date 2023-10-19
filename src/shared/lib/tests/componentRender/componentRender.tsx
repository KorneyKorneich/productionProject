import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { type StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { type DeepPartial } from 'redux';

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}

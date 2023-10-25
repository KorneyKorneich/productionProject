import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore, type StateSchema } from 'app/provider/StoreProvider';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

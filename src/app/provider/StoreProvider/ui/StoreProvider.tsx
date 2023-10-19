import React, { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/provider/StoreProvider/config/store';
import { type StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { type DeepPartial } from 'redux';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>

    );
};

export default StoreProvider;

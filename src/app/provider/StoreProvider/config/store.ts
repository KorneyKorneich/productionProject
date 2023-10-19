import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { counterReducer } from '../../../../entities/Counter/model/slice/CounterSlice';

export function createReduxStore (initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

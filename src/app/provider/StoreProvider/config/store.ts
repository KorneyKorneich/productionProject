import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/provider/StoreProvider/config/reducerManager';
import { type NavigateFunction } from 'react-router';
import { $api } from 'shared/api/api';
import { type StateSchema } from 'app/provider/StoreProvider';
import { type ThunkExtraArg } from 'app/provider/StoreProvider/config/StateSchema';

export function createReduxStore (

    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction

) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    });

    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

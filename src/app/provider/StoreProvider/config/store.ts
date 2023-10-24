import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { counterReducer } from '../../../../entities/Counter/model/slice/CounterSlice';
import { userReducer } from '../../../../entities/User/model/slice/userSlice';
import { loginReducer } from 'features/AuthByUsername';
export function createReduxStore (initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }

    return configureStore<StateSchema>({

        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

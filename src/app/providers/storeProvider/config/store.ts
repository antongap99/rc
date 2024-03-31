import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { userReducer } from 'entities/user';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/authByUserName/model/slice/LoginSlice';

const rootReducer = combineReducers({
    user: userReducer,
    login: loginReducer,
});

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>

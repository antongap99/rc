import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/authByUserName/model/slice/LoginSlice';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducer,
	        loginForm: loginReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export type RootState = ReturnType<typeof createReduxStore>['getState']
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

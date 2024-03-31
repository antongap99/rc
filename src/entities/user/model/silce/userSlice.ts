import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/types';

const initialState: UserSchema = {

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<User>) {
            state.authData = action.payload;
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;

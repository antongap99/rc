import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/types';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, payload: PayloadAction<string>) => {
            state.username = payload.payload;
        },
    },
});

export const { actions: loginActions } = loginSlice;
export const { actions: loginReducer } = loginSlice;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserById } from 'features/authByUserName/services/LoginByUsername/LoginByUsername';
import { LoginSchema } from '../types/types';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
};
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, payload: PayloadAction<string>) => {
            state.username = payload.payload;
        },
        setPassword: (state, payload: PayloadAction<string>) => {
            state.password = payload.payload;
        },
    },
    extraReducers(buider) {
        buider
            .addCase(fetchUserById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUserById.rejected, (state) => {
                state.error = 'error';
                state.isLoading = false;
            })
            .addCase(fetchUserById.fulfilled, (state, payload: PayloadAction<unknown>) => {
                state.error = undefined;
                state.isLoading = false;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

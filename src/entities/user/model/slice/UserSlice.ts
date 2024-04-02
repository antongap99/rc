import { createSlice } from '@reduxjs/toolkit';

export interface UserSchema {
	username: string,
	password: string
}

const initialState: UserSchema = {
    username: '',
    password: '',
};

export const counterSlice = createSlice({
    name: 'user11111',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { actions: CounterActions, reducer: CounterReducer } = counterSlice;

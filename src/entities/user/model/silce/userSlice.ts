import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'user23',
    initialState: {
        value: 0,
    },
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

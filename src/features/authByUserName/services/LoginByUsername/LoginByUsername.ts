import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/user';

interface LoginByUsernameProps {
    username: string,
    password: string,
}

export const fetchUserById = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (params, thunkAPI) => {
        const { username, password } = params;
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            }, { headers: { authorization: 'authorization' } });

            if (!response.data) {
                throw new Error('error');
            }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);

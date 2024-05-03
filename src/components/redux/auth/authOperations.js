import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = `https://connections-api.herokuapp.com/docs/`

export const register = createAsyncThunk('auth/ register', async ({ name, email,
password},thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', {
                name,
                email,
                password,
            });
            // setAuthHeader(response.data.token);
            return response.data;
        }   catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
})

export const logIn = createAsyncThunk('auth/login', async({email, password},
    thunkAPI) => {
    try {
        const response = await axios.post('/users/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)  
    }   
});

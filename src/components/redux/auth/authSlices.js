import { createSlice } from "@reduxjs/toolkit";
import { register, logIn } from "./authOperations";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isLoading: false,
        isError:false,
    },
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state,_action) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, _action) => {
                state.isLoading = false;
                state.isError = true;
            })
            
            .addCase(logIn.pending, (state,_action) => {
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, (state,_action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const authReducer = authSlice.reducer;
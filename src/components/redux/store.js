import { contactsSlice } from '../redux/contactsSlice';
import { filterSlice } from '../redux/filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlices';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});


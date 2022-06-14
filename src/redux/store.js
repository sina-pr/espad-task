import { configureStore } from '@reduxjs/toolkit';
import customersReudcer from './customers/customersSlice';
export const store = configureStore({
  reducer: {
    Customers: customersReudcer,
  },
});

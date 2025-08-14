import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/Auth/authSlice.ts';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

store.subscribe(() => {
  console.log('Store state:', store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

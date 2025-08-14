import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { jwtPayload } from '../../../../../packages/types/src/jwt.ts';
import { UserRole } from '../../../../../packages/types/src/jwt.ts'

type AuthState = {
  isLoggedIn: boolean;
  user: jwtPayload;
};

const initialState: AuthState = {
  isLoggedIn: false,
  user: {
    id: '',
    email: '',
    role: UserRole.GUEST,
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, actions: PayloadAction<jwtPayload>) {
      state.isLoggedIn = true;
      state.user = actions.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = {
        id: '',
        email: '',
        role: UserRole.GUEST,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

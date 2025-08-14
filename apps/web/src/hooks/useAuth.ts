import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { jwtPayload } from '../../../../packages/types/src/jwt.ts';
import { login, logout } from '../features/Auth/authSlice.ts';
import type { AppDispatch, RootState } from '../store/index.ts';

export function useAuth() {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user)
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    console.log('fetchUser called');
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/me', {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) {
          dispatch(logout());
          return;
        }

        const user = await res.json() as jwtPayload;
        dispatch(login(user));
      } catch (error: unknown) {
        dispatch(logout());
        if (error instanceof Error) {
          console.error("Erreur lors de la récupération de l'utilisateur:", error);
        }
        console.error("Erreur inconnue lors de l'authentification");
      }
    };

    void fetchUser();
  }, [dispatch]);

  return { user, logout: () => dispatch(logout()) };
}

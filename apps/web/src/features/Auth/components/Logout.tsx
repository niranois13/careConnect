import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../authSlice.ts';

type LogoutResponse = { message: string };

async function handleLogout(): Promise<LogoutResponse> {
  const res = await fetch('/api/logout', {
    method: 'POST',
    credentials: 'include',
  });
  console.log('logout res', res);
  if (!res.ok) {
    throw new Error('Echec de la déconnexion.');
  }
  return await res.json() as LogoutResponse;
}

function Logout() {
  console.log('Logout component mounted');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: handleLogout,
    onSuccess: () => {
      dispatch(logout());
      void navigate('/');
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error('Erreur lors de la déconnexion:', error);
      } else {
        console.error('Erreur inconnue lors de la déconnexion.');
      }
    },
  });

  return (
    <button
      className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5"
      onClick={() => {
        console.log('Logout button clicked');
        mutation.mutate();
      }}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? 'Déconnexion...' : 'Se déconnecter'}
    </button>
  );
}

export default Logout;

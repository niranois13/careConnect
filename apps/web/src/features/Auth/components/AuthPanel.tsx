import { useSelector } from 'react-redux';

import type { RootState } from '../../../store/index.ts';
import AuthModal from '../../../components/Header/AuthModal.tsx';
import Logout from './Logout.tsx';
import { useState } from 'react';

export default function AuthPanel() {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log('AuthPanel isLoggedIn:', isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <Logout />
      ) : (
        <button
          onClick={() => { setAuthModalOpen(true); }}
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-lg text-sm px-3.5 py-2 text-center"
        >
          Se connecter
        </button>
      )
      }
      {
        isAuthModalOpen &&
        <AuthModal onClose={() => { setAuthModalOpen(false); }} />
      }
    </div>
  )
}

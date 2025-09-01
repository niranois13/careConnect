import { faCalendarDays, faShieldHalved, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/index.ts';

import LandingCard from './components/Cards/LandingCard.tsx';
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import HeroSection from './components/HeroSection/HeroSection.tsx'
import SearchBar from './components/SearchBar/SearchBar.tsx';
import AdminPanel from './components/AdminPanel/AdminPanel.tsx';
import { login } from './features/Auth/authSlice.ts';
import { jwtPayload } from '../../../packages/types/src/jwt.ts';

function App() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        if (res.ok) {
          const user: jwtPayload = await res.json();
          dispatch(login(user));
        }
      } catch (err) {
        console.error("Auth bootstrap error:", err);
      }
    };
    fetchMe();
  }, [dispatch]);

  const isAdmin = isLoggedIn && user.role === 'ADMIN';

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          {isAdmin ? (
            <AdminPanel />
          ) : (
            <>
              <HeroSection />

              <div className="flex justify-center mt-2 py-3">
                <SearchBar
                  size="landing"
                  label="Je recherche un professionnel"
                  labelPosition="top"
                  labelStyle="landing"
                />
              </div>

              <div className="flex flex-wrap bg-purple-50 rounded-lg mx-auto mt-2 py-3">
                <p className="text-3xl w-full text-center font-bold mb-5">
                  Pourquoi choisir <strong>careConnect</strong> ?
                </p>
                <div className="flex flex-wrap justify-around gap-5 w-full">
                  <LandingCard
                    icon={<FontAwesomeIcon icon={faShieldHalved} size="2x" className="text-purple-700" />}
                    title="Professionnels vérifiés"
                    text="Tous les professionels sont bien vérifiés. Ils sont qualifiés pour réaliser leur travail."
                  />
                  <LandingCard
                    icon={<FontAwesomeIcon icon={faCalendarDays} size="2x" className='text-purple-700' />}
                    title="Rendez-vous flexibles"
                    text="Je choisis le professionnel et je choisis avec lui le bon moment pour un rendez-vous."
                  />
                  <LandingCard
                    icon={<FontAwesomeIcon icon={faUsers} size="2x" className='text-purple-700' />}
                    title="Une équipe présente"
                    text="Je peux contacter une équipe technique formée de travailleurs sociaux à la moindre question."
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}


export default App;

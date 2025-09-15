import { faCalendarDays, faShieldHalved, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { jwtPayloadSchema } from '../../../packages/schemas/src/users.schemas.ts';
import AdminPanel from './components/AdminPanel/AdminPanel.tsx';
import LandingCard from './components/Cards/LandingCard.tsx';
import CareSeekerPanel from './components/CareSeekerPanel/CareSeekerPanel.tsx';
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import HeroSection from './components/HeroSection/HeroSection.tsx'
import SearchBar from './components/SearchBar/SearchBar.tsx';
import { login } from './features/Auth/authSlice.ts';
import { RootState } from './store/index.ts';

function App() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
  const userId: string = user.id

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        if (res.ok) {
          const user: unknown = await res.json();
          const parsed = jwtPayloadSchema.parse(user)
          dispatch(login(parsed));
        }
      } catch (err) {
        console.error("Auth bootstrap error:", err);
      }
    };
    void fetchMe();
  }, [dispatch]);

  const isAdmin = isLoggedIn && user.role === 'ADMIN';
  const isCareSeeker = isLoggedIn && user.role === 'CARESEEKER';

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex flex-col">
          {isAdmin ? (
            <AdminPanel />
          ) :
            isCareSeeker ? (
              <CareSeekerPanel userId={userId} />
            ) : (
              <>
                <div className='flex-1 flex flex-col justify-around'>
                  <HeroSection />
                  <div className="flex justify-center mb-5">
                    <SearchBar
                      size="landing"
                      label="Je recherche un professionnel"
                      labelPosition="top"
                      labelStyle="landing"
                    />
                  </div>
                  <div className="flex flex-wrap bg-purple-50 rounded-lg mx-auto">
                    <p className="text-3xl w-full text-center font-bold mb-5">
                      Pourquoi choisir <strong>careConnect</strong> ?
                    </p>
                    <div className="flex flex-wrap justify-around gap-x-5 gap-y-5 w-full">
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

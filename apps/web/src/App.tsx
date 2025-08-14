import { Toaster } from 'react-hot-toast';
import React from 'react';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import HeroSection from './components/HeroSection/HeroSection.tsx'
import { useAuth } from './hooks/useAuth.ts';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import LandingCard from './components/Cards/LandingCard.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faCalendarDays, faUsers } from '@fortawesome/free-solid-svg-icons';

function App() {
  useAuth();

  return (
    <>
      {/* Toaster */}
      <Toaster position="top-center" />

      {/* Body */}
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">

          <Header />
          <HeroSection />

          <div className="flex justify-center mt-2 py-3">
            <SearchBar size="lg" label="Je recherche un professionnel" labelPosition="top" labelStyle='landing'/>
          </div>

          <div className='flex flex-wrap bg-purple-100 rounded-lg w-full max-w-5/6 mx-auto mt-2 py-3'>
            <p className='text-3xl w-full text-center font-bold mb-5'>
              Pourquoi choisir <strong>careConnect</strong> ?
            </p>
            <div className='flex flex-wrap justify-around w-full'>
              <LandingCard
                icon={<FontAwesomeIcon icon={faShieldHalved} size="2x" className="text-purple-700"/>}
                title="Professionnels vérifiés"
                text="Tous les professionels sont bien vérifiés. Ils sont qualifiés pour réaliser leur travail."
              />
              <LandingCard
                icon={<FontAwesomeIcon icon={faCalendarDays} size="2x" className='text-purple-700'/>}
                title="Rendez-vous flexibles"
                text="Je choisis le professionnel et je choisis avec lui le bon moment pour un rendez-vous."
              />
              <LandingCard
                icon={<FontAwesomeIcon icon={faUsers} size="2x" className='text-purple-700'/>}
                title="Une équipe présente"
                text="Je peux contacter une équipe technique formée de travailleurs sociaux à la moindre question."
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';

import BaseModal from '../BaseModal/BaseModal.tsx';
import RegisterPro from '../../features/Registration/ProRegister.tsx';
import RegisterUser from '../../features/Registration/UserRegister.tsx';

export default function HeroSection() {
  const [isUserRegisterModalOpen, setUserRegisterModalOpen] = useState(false);
  const [isProRegisterModalOpen, setProRegisterModalOpen] = useState(false);

  useEffect(() => {
    setUserRegisterModalOpen(false);
    setProRegisterModalOpen(false);
  }, []);

  return (
    <div className="flex flex-col items-center text-center mt-2">

      <div className="flex flex-col items-center">
        <img
          src="/src/assets/logocCpurple.png"
          alt="logo de careConnect, représente une maison et deux mains tendues, symbolisant l'entraide amenée à domicile"
          className="w-60 h-auto"
        />
        <h2 className="text-3xl font-extrabold mb-1">careConnect</h2>
        <h3 className="text-2xl font-bold mb-5">Améliorer la vie, ensemble.</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-x-15 gap-y-5">
        <button
          onClick={() => { setUserRegisterModalOpen(true); }}
          className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-300 font-bold rounded-lg text-l px-8 py-2 text-center"
        >
          Créer un compte utilisateur
        </button>
        <button
          onClick={() => { setProRegisterModalOpen(true); }}
          className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-300 font-bold rounded-lg text-l px-8 py-2 text-center"
        >
          Créer un compte professionel
        </button>
      </div>
      {isUserRegisterModalOpen &&
        <BaseModal onClose={() => setUserRegisterModalOpen(false)}>
          <RegisterUser onSuccess={() => { setUserRegisterModalOpen(false); }} />
        </BaseModal>
      }

      {isProRegisterModalOpen &&
        <BaseModal onClose={() => setProRegisterModalOpen(false)}>
          <RegisterPro onSuccess={() => setProRegisterModalOpen(false)} />
        </BaseModal>
      }
    </div>
  )
}

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
    <div className="flex flex-col items-center text-center mb-2">
      <div className="flex flex-col items-center">
        <img
          src="/src/assets/logocCpurple.png"
          alt="logo de careConnect, représente une maison et deux mains tendues, symbolisant l'entraide amenée à domicile"
          className="
            hidden
            sm:block
            sm:max-w-sm
            md:max-w-md
            lg:max-w-lg
            xl:max-w-xl
            2xl:max-w-2xl
            w-full
            h-auto
          "
        />
        <h2 className="
          md:text-5xl sm:text-2xl text-2xl
          font-extrabold
          mb-1
          "
        >careConnect</h2>
        <h3 className="
          xl:text-4xl lg:text2-3xl md:text-2xl sm:text-xl text-xl
          font-bold
          mb-5
          "
        >Améliorer la vie, ensemble.</h3>
      </div>

      <div className="
            flex
            flex-wrap
            justify-center
            gap-x-15
            gap-y-5
            w-full
            max-w-[60%]
            xl:max-w-4xl lg:max-w-2xl md:max-w-xl sm:max-w-sm
            mx-auto
            ">
        <button
          onClick={() => { setUserRegisterModalOpen(true); }}
          className="
            flex-1
            min-w-80 sm:min-w-72 md:min-w-78
            text-white
            bg-emerald-600
            hover:bg-emerald-500
            focus:ring-2
            focus:outline-none
            focus:ring-purple-600
            font-bold
            rounded-lg
            py-2 sm:py-2 md:py-3 lg:py-4
            text-md xl:text-xl lg:text-lg
            "
        >
          Créer un compte utilisateur
        </button>
        <button
          onClick={() => { setProRegisterModalOpen(true); }}
          className="
            flex-1
            min-w-80 sm:min-w-72 md:min-w-78
          text-white
          bg-emerald-600
          hover:bg-emerald-500
            focus:ring-2
            focus:outline-none
          focus:ring-purple-600
            font-bold
            rounded-lg
            py-2 sm:py-2 md:py-3 lg:py-4
            text-md xl:text-xl lg:text-lg
            "
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

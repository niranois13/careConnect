import { useState } from 'react';

import { useProfessions } from '../../hooks/useProfessions.ts';
import { useCreateProfession } from '../../hooks/useCreateProfession.tsx';
import { useRegisterProfessional } from '../../hooks/useRegisterProfessional.tsx';
import { professionalCreateSchema } from '../../../../../packages/schemas/src/users.schemas.ts';
import PasswordRules from './PasswordRules.tsx';

type registerProps = {
  onSuccess?: () => void;
};

export default function RegisterPro({ onSuccess }: registerProps) {
  const { professions = [], isLoading } = useProfessions();
  const createProfession = useCreateProfession();
  const registerPro = useRegisterProfessional({
    onSuccess,
    onError: (error) => setFormError(error.message),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [interventionRadius, setInterventionRadius] = useState(0);
  const [siret, setSiret] = useState('');
  const [isSiretValid] = useState(false);
  const [professionId, setProfessionId] = useState('');
  const [customProfession, setCustomProfession] = useState('');
  const [formError, setFormError] = useState('');
  const role = 'PROFESSIONAL';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (password !== confirmPassword) {
      setFormError("Les mots de passe ne correspondent pas.");
      return;
    }

    let normalizedPhoneNumber: string | null;
    if (!phoneNumber || phoneNumber.trim() === '') {
      normalizedPhoneNumber = null;
    } else {
      normalizedPhoneNumber = phoneNumber.trim();
    }

    try {
      let finalProfessionId = professionId;

      if (selectedProfession?.professionName === 'Autre' && customProfession.trim() !== '') {
        const newProfession = await createProfession.mutateAsync({
          professionName: 'Autre',
          customProfession,
          isCustomProfessionApproved: false,
        });
        finalProfessionId = newProfession.id;
      }

      console.log('payload pour Zod:', {
        email,
        password,
        firstName,
        lastName,
        phoneNumber: normalizedPhoneNumber,
        role,
        isMobile,
        interventionRadius,
        siret,
        isSiretValid,
        professionId: finalProfessionId,
      });

      const parsed = professionalCreateSchema.safeParse({
        email,
        password,
        firstName,
        lastName,
        phoneNumber: normalizedPhoneNumber,
        role,
        isMobile,
        interventionRadius,
        siret,
        isSiretValid,
        professionId: finalProfessionId,
      });

      if (!parsed.success) {
        setFormError(parsed.error.issues[0].message);
        console.log('parsed.error:', parsed.error.issues[0].message)
        return;
      }

      console.log('parsed.data:', parsed.data)
      registerPro.mutate(parsed.data);
    } catch (error: unknown) {
      console.warn('Erreur lors de la création du profil', error);
      if (error instanceof Error) {
        setFormError(error.message);
      } else {
        setFormError(
          'Une erreur inconnue est survenue lors de la création du profil'
        );
      }
    }
  };

  const selectedProfession = professions.find(p => p.id === professionId);

  return (
    <form aria-label="form" onSubmit={handleSubmit} className='max-w-lg mx-auto'>
      {formError && (
        <p aria-live="polite" style={{ color: 'red' }}>
          {formError}
        </p>
      )}
      <div className="flex flex-row flex-wrap justify-center space-x-2 w-full mb-5">
        <div>
          <label htmlFor="firstName" className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Prénom :</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            disabled={registerPro.isPending}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-1.5"
            placeholder='Jean'
            autoComplete="given-name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Nom :</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            disabled={registerPro.isPending}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-1.5"
            placeholder='Martin'
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className="flex flex-col flex-wrap mb-5">
        <p className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Vous devez avoir un numéro SIRET pour utiliser <strong>careConnect</strong></p>
        <p className='block mb-1 text-sm font-light text-gray-900'>Pas de SIRET ? Vous pouvez quand même vous inscrire.</p>
        <div className='flex flex-row flex-wrap justify-center space-x-5 w-full'>
          <div>
            <label htmlFor='siret' className='block text-sm font-medium text-gray-900 dark:text-white'>Numéro SIRET :</label>
            <input
              id="siret"
              type="text"
              value={siret}
              onChange={(e) => {
                setSiret(e.target.value);
              }}
              disabled={registerPro.isPending}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-1.5"
              placeholder='12345678900013'
              inputMode="numeric"
              pattern="\d{14}"
              autoComplete="off"
            />
          </div>
          <div className='flex flex-col justify-baseline p-0.5'>
            <p>Plus d'infos sur:</p>
            <a
              href='https://entreprendre.service-public.fr/vosdroits/F32135'
              className='text-purple-800 font-semibold hover:text-purple-600'
            >
              entreprendre.service-public.fr
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center flex-wrap space-x-2 mb-5">
        <select
          value={professionId}
          onChange={(e) => setProfessionId(e.target.value)}
          disabled={registerPro.isPending}
          className="flex-shrink min-w-0 max-w-[45ch] h-[40px] truncate text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500"
          required
        >
          <option value="" disabled>
            {isLoading ? 'Chargement...' : 'Choisissez votre profession'}
          </option>
          {professions.map((p) => (
            <option key={p.id} value={p.id}>
              {p.professionName}
            </option>
          ))}
        </select>

        {selectedProfession?.professionName === 'Autre' && (
          <div>
            <label htmlFor='customProfession' className='sr-only'>Entrez vore profession:</label>
            <input
              type="text"
              name="customProfession"
              autoComplete="organization-title"
              value={customProfession}
              onChange={(e) => setCustomProfession(e.target.value)}
              disabled={registerPro.isPending}
              placeholder="Ex: Chiropracteur.ice"
              className="flex-1 min-w-0 max-w-[180px] h-[40px] truncate text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        )}
      </div>

      <div className="flex flex-row justify-center space-x-2 w-full mb-5">
        <div>
          <p className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Acceptez-vous de vous déplacer (domicile, extérieur,...) ?</p>
          <div className="flex flex-row justify-center space-x-5 flex-wrap">
            <div className='flex flex-col'>
              <label htmlFor="isMobileTrue" className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Oui</label>
              <input
                id="isMobileTrue"
                type="radio"
                name="isMobile"
                checked={isMobile}
                onChange={() => {
                  setIsMobile(true);
                }}
                disabled={registerPro.isPending}
                required
                className="block p-1.5"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="isMobileFalse" className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Non</label>
              <input
                id="isMobileFalse"
                type="radio"
                checked={!isMobile}
                name="isMobile"
                onChange={() => {
                  setIsMobile(false);
                }}
                disabled={registerPro.isPending}
                required
                className="block p-1.5"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="interventionRadius" className='block text-sm font-medium text-gray-900 dark:text-white'>Rayon d'intervention: {interventionRadius} km:</label>
              <input
                id="interventionRadius"
                type="range"
                min={0}
                max={200}
                step={1}
                value={interventionRadius}
                onChange={(e) => {
                  setInterventionRadius(Number(e.target.value));
                }}
                disabled={registerPro.isPending}
                required
                className="block p-1.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center space-x-2 w-full mb-5">
        <div>
          <label htmlFor="email" className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Email :</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={registerPro.isPending}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-1.5"
            placeholder='example@mail.com'
          />
        </div>
        <div>
          <label htmlFor="tel" className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Téléphone :</label>
          <input
            id="tel"
            type="tel"
            autoComplete="tel-national"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            disabled={registerPro.isPending}
            pattern="^0\d{9}$"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-1.5"
            placeholder='0123456789'
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center space-x-2 w-full mb-1">
        <div>
          <label htmlFor="password" className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Mot de passe :</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            disabled={registerPro.isPending}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-1.5"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Confirmez le mot de passe :</label>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            disabled={registerPro.isPending}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-1.5"
            required
          />
        </div>
      </div>

      <PasswordRules password={password} confirmPassword={confirmPassword} />

      <button
        type="submit"
        disabled={registerPro.isPending}
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full p-2.5 text-center">
        {registerPro.isPending ? 'Création du compte..' : 'Créer mon compte'}
      </button>
    </form>
  );
}

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { z } from 'zod';

import { ProfessionalSchema } from '../../../../../packages/schemas/src/users.schemas.ts';
import PasswordRules from './PasswordRules.tsx';

const proRegistrationSchema = ProfessionalSchema;

type registerData = z.infer<typeof proRegistrationSchema>;

type ProfessionalResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  role: string;
};

type APIResponse<T> = {
  data: T;
  error?: string;
};

async function registerPro(data: registerData): Promise<ProfessionalResponse> {
  try {
    const res = await fetch('/api/professional', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const json = (await res.json()) as APIResponse<ProfessionalResponse>;

    if (!res.ok)
      throw new Error(json.error || 'Erreur lors de la création de compte.');

    return json.data;
  } catch (error: unknown) {
    console.warn('Erreur lors de la création de compte');
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Un erreur inconnue est survenue lors de la création de compte.');
  }
}

type registerProps = {
  onSuccess?: () => void;
};

function RegisterPro({ onSuccess }: registerProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const role = 'PROFESSIONAL';
  const [isMobile, setIsMobile] = useState(false);
  const [interventionRadius, setInterventionadius ] = useState(0);
  const [siret, setSiret] = useState('');
  const [profession, setProfession] = useState('');
  const [customProfession, setCustomProfession] = useState('');
  const [formError, setFormError] = useState('');

  const mutation = useMutation({
    mutationFn: registerPro,
    onSuccess: (data) => {
      console.log(data);
      toast.success('Compte créé avec succès !');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setIsMobile(false);
      setInterventionadius(0);
      setSiret('');
      setProfession('');
      setCustomProfession('');
      onSuccess?.();
    },
    onError: (error: Error) => {
      toast.error(error.message);
      setFormError(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
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

    const parsed = proRegistrationSchema.safeParse({
      email,
      password,
      firstName,
      lastName,
      phoneNumber: normalizedPhoneNumber,
      role,
      isMobile,
      interventionRadius,
      siret,
      profession,
      customProfession,
    });
    if (!parsed.success) {
      setFormError(parsed.error.issues[0].message);
      return;
    }

    mutation.mutate(parsed.data);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit} className='max-w-lg mx-auto'>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}

      <div className="flex flex-row flex-wrap justify-center space-x-2 w-full">
        <div className='mb-5'>
          <label htmlFor="firstName" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Prénom :</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            disabled={mutation.isPending}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            placeholder='Jean'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="lastName" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Nom :</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            disabled={mutation.isPending}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            placeholder='Martin'
          />
        </div>
      </div>

      <div className="flex flex-col flex-wrap ">
        <legend className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Vous devez avoir un numéro SIRET pour utiliser <strong>careConnect</strong></legend>
        <p className='block mb-2 text-sm font-light text-gray-900'>Pas de SIRET ? Vous pouvez quand même vous inscrire.</p>
        <div className='flex flex-row flex-wrap justify-center space-x-5 w-full mb-5'>
          <div>
            <label htmlFor='siret' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Numéro SIRET :</label>
            <input
                id="siret"
                type="text"
                value={siret}
                onChange={(e) => {
                  setSiret(e.target.value);
                }}
                disabled={mutation.isPending}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                placeholder='12345678900013'
              />
          </div>
          <div className='flex flex-col justify-baseline'>
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

      <div className="flex flex-row justify-center space-x-2 w-full">
        <div className='mb-5 w-full'>
          <legend className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Acceptez-vous de vous déplacer (domicile, extérieur,...) ?</legend>
          <div className="flex flex-row justify-center space-x-5 flex-wrap">
            <div className='flex flex-col'>
              <label htmlFor="isMobileTrue" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Oui</label>
              <input
                id="isMobileTrue"
                type="radio"
                name="isMobile"
                checked={isMobile === true}
                onChange={() => {
                  setIsMobile(true);
                }}
                disabled={mutation.isPending}
                required
                className="block p-2.5"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="isMobileFalse" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Non</label>
              <input
                id="isMobileFalse"
                type="radio"
                checked={isMobile === false}
                name="isMobile"
                onChange={() => {
                  setIsMobile(false);
                }}
                disabled={mutation.isPending}
                required
                className="block p-2.5"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="interventionRadius" className='block text-sm font-medium text-gray-900 dark:text-white'>Rayon d'intervention: {interventionRadius} km:</label>
              <input
                id="interventionRadius"
                type="range"
                min={0}
                max={200}
                step={5}
                value={interventionRadius}
                onChange={(e) => {
                  setInterventionadius(Number(e.target.value));
                }}
                disabled={mutation.isPending}
                required
                className="block p-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center space-x-2 w-full">
        <div className='mb-5'>
          <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email :</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={mutation.isPending}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            placeholder='example@mail.com'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="tel" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Téléphone :</label>
          <input
            id="tel"
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            disabled={mutation.isPending}
            pattern="^0\d{9}$"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            placeholder='0123456789'
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center space-x-2 w-full">
        <div>
          <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Mot de passe :</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            disabled={mutation.isPending}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Confirmez le mot de passe :</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            disabled={mutation.isPending}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            required
          />
        </div>
      </div>

      <PasswordRules password={password} confirmPassword={confirmPassword} />

      <button
        type="submit"
        disabled={mutation.isPending}
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
        {mutation.isPending ? 'Création du compte..' : 'Créer mon compte'}
      </button>
    </form>
  );
}

export default RegisterPro;

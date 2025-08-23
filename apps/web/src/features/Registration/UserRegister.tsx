import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { z } from 'zod';

import { careSeekerCreateSchema } from '../../../../../packages/schemas/src/users.schemas.ts';
import PasswordRules from './PasswordRules.tsx';

const userRegistrationSchema = careSeekerCreateSchema;

type registerData = z.infer<typeof userRegistrationSchema>;

type CareSeekerResponse = {
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

async function registerUser(data: registerData): Promise<CareSeekerResponse> {
  try {
    const res = await fetch('/api/careseeker', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const json = (await res.json()) as APIResponse<CareSeekerResponse>;

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

function RegisterUser({ onSuccess }: registerProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const role = 'CARESEEKER';
  const [formError, setFormError] = useState('');

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success('Compte créé avec succès !');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
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

    const parsed = userRegistrationSchema.safeParse({
      email,
      password,
      firstName,
      lastName,
      phoneNumber: normalizedPhoneNumber,
      role
    });
    if (!parsed.success) {
      setFormError(parsed.error.issues[0].message);
      return;
    }

    mutation.mutate(parsed.data);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit} className="max-w-lg mx-auto">
      {formError && <p aria-live="polite" className="text-red-600">{formError}</p>}

      {/* Name fields */}
      <div className="flex flex-row flex-wrap justify-center gap-x-2 mb-5">
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Prénom :
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={mutation.isPending}
            required
            placeholder="Jean"
            autoComplete="given-name"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nom :
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={mutation.isPending}
            required
            placeholder="Martin"
            autoComplete="family-name"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-row flex-wrap justify-center gap-x-2 mb-5">
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email :
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={mutation.isPending}
            required
            placeholder="example@mail.com"
            autoComplete="email"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Téléphone :
          </label>
          <input
            id="tel"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={mutation.isPending}
            pattern="^0\d{9}$"
            placeholder="0123456789"
            autoComplete="tel"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-row flex-wrap justify-center gap-x-2 mb-5">
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Mot de passe :
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={mutation.isPending}
            required
            autoComplete="new-password"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Confirmez le mot de passe :
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={mutation.isPending}
            required
            autoComplete="new-password"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <PasswordRules password={password} confirmPassword={confirmPassword} />

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full px-5 py-2.5 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        {mutation.isPending ? 'Création du compte...' : 'Créer mon compte'}
      </button>
    </form>
  );
}

export default RegisterUser;

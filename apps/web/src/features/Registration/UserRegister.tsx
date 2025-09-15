import { useState } from 'react';

import { careSeekerCreateSchema } from '../../../../../packages/schemas/src/users.schemas.ts';
import { useRegisterCareSeeker } from '../../hooks/CareSeekers/useRegisterCareSeekers.tsx';
import PasswordRules from './PasswordRules.tsx';

type registerProps = {
  onSuccess?: () => void;
};

export default function RegisterUser({ onSuccess }: registerProps) {
  const registerCareSeeker = useRegisterCareSeeker({
    onSuccess,
    onError: (error) => { setFormError(error.message); },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isHelper, setIsHelper] = useState(false);
  const [label, setLabel] = useState('');
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const role = 'CARESEEKER';
  const [formError, setFormError] = useState('');

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

    try {
      const parsed = careSeekerCreateSchema.safeParse({
        email,
        password,
        firstName,
        lastName,
        phoneNumber: normalizedPhoneNumber,
        role,
        isHelper,
        label,
        street,
        postalCode,
        city,
        address: [{
          label,
          street,
          postalCode,
          city,
        }],
      });
      if (!parsed.success) {
        console.error(parsed.error.issues[0])
        setFormError(parsed.error.issues[0].message);
        return;
      }

      registerCareSeeker.mutate(parsed.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setFormError(error.message);
      } else {
        setFormError(
          'Une erreur inconnue est survenue lors de la création du profil'
        );
      }
    }
  }

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
            onChange={(e) => { setFirstName(e.target.value); }}
            disabled={registerCareSeeker.isPending}
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
            onChange={(e) => { setLastName(e.target.value); }}
            disabled={registerCareSeeker.isPending}
            required
            placeholder="Martin"
            autoComplete="family-name"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="flex justify-center mb-5">
        <label htmlFor="isHelper" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Je suis un.e aidant.e ?
        </label>
        <input
          id="isHelper"
          type="checkbox"
          checked={isHelper}
          onChange={(e) => { setIsHelper(e.target.checked); }}
          disabled={registerCareSeeker.isPending}
        />
      </div>

      {/* Contact */}
      <div className="flex flex-row flex-wrap justify-center gap-x-2 gap-y-2 mb-5">
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email :
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            disabled={registerCareSeeker.isPending}
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
            onChange={(e) => { setPhoneNumber(e.target.value); }}
            disabled={registerCareSeeker.isPending}
            pattern="^0\d{9}$"
            placeholder="0123456789"
            autoComplete="tel"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      {/* Adresse */}
      <div className="flex flex-row flex-wrap justify-center gap-x-2 gap-y-2 mb-5">
        <div className="flex-1 min-w-[150px]">
          <div className="flex-1 min-w-[150px]">
            <label htmlFor="label" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              label :
            </label>
            <input
              id="label"
              type="text"
              value={label}
              onChange={(e) => { setLabel(e.target.value); }}
              disabled={registerCareSeeker.isPending}
              placeholder="Domicile"
              className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Rue :
          </label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={(e) => { setStreet(e.target.value); }}
            disabled={registerCareSeeker.isPending}
            placeholder="1 rue des lilas"
            autoComplete="address"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="postalCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Code Postal :
          </label>
          <input
            id="postalCode"
            type="text"
            value={postalCode}
            onChange={(e) => { setPostalCode(e.target.value); }}
            disabled={registerCareSeeker.isPending}
            placeholder="74200"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Ville :
          </label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => { setCity(e.target.value); }}
            disabled={registerCareSeeker.isPending}
            required
            placeholder="Thonon-les-bains"
            autoComplete="city"
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
            onChange={(e) => { setPassword(e.target.value); }}
            disabled={registerCareSeeker.isPending}
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
            onChange={(e) => { setConfirmPassword(e.target.value); }}
            disabled={registerCareSeeker.isPending}
            required
            autoComplete="new-password"
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <PasswordRules password={password} confirmPassword={confirmPassword} />

      <button
        type="submit"
        disabled={registerCareSeeker.isPending}
        className="w-full px-5 py-2.5 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        {registerCareSeeker.isPending ? 'Création du compte...' : 'Créer mon compte'}
      </button>
    </form>
  );
}

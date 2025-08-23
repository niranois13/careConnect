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

    let normalizedSiret: string | null;
    if (!siret || siret.trim() === '') {
      normalizedSiret = null;
    } else {
      normalizedSiret = siret.trim();
    }

    try {
      let finalProfessionId = professionId;

      if (selectedProfession?.professionName === 'Autre' && customProfession.trim() !== '') {
        const newProfession = await createProfession.mutateAsync({
          professionName: 'Autre',
          customProfession,
          isProfessionApproved: false,
        });
        finalProfessionId = newProfession.id;
      }

      const parsed = professionalCreateSchema.safeParse({
        email,
        password,
        firstName,
        lastName,
        phoneNumber: normalizedPhoneNumber,
        role,
        isMobile,
        interventionRadius,
        siret:  normalizedSiret,
        isSiretValid,
        professionId: finalProfessionId,
      });

      if (!parsed.success) {
        setFormError(parsed.error.issues[0].message);
        return;
      }

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
    <form aria-label="form" onSubmit={handleSubmit} className="max-w-lg mx-auto">
      {formError && <p aria-live="polite" className="text-red-600">{formError}</p>}

      {/* Name */}
      <div className="flex flex-row flex-wrap justify-center gap-x-2 mb-5">
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Prénom :
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={registerPro.isPending}
            required
            placeholder="Jean"
            autoComplete="given-name"
            className="w-full p-1.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Nom :
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={registerPro.isPending}
            required
            placeholder="Martin"
            autoComplete="family-name"
            className="w-full p-1.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      {/* SIRET */}
      <div className="mb-5">
        <label htmlFor="siret" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Numéro SIRET :
        </label>
        <input
          id="siret"
          type="text"
          value={siret}
          onChange={(e) => setSiret(e.target.value)}
          disabled={registerPro.isPending}
          placeholder="12345678900013"
          inputMode="numeric"
          autoComplete="off"
          className="w-full p-1.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
        <p className="text-sm text-gray-700 mt-1">
          Plus d'infos sur: <a href="https://entreprendre.service-public.fr/vosdroits/F32135" className="text-purple-800 font-semibold hover:text-purple-600">entreprendre.service-public.fr</a>
        </p>
      </div>

      {/* Profession */}
      <div className="flex flex-row flex-wrap justify-center gap-x-2 mb-5">
        <label htmlFor='professionSelect' className='sr-only'>Choisissez votre profession:</label>
        <select
          value={professionId}
          id="professionSelect"
          onChange={(e) => setProfessionId(e.target.value)}
          disabled={registerPro.isPending}
          required
          className="min-w-0 max-w-[45ch] h-[40px] text-center text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
        >
          <option value="" disabled>{isLoading ? 'Chargement...' : 'Choisissez votre profession'}</option>
          {professions.map((p) => <option key={p.id} value={p.id}>{p.professionName}</option>)}
        </select>

        {selectedProfession?.professionName === 'Autre' && (
          <input
            type="text"
            id="customProfession"
            name="customProfession"
            value={customProfession}
            onChange={(e) => setCustomProfession(e.target.value)}
            disabled={registerPro.isPending}
            placeholder="Ex: Chiropracteur.ice"
            autoComplete="organization-title"
            className="flex-1 min-w-0 max-w-[180px] h-[40px] text-center text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        )}
      </div>

      {/* Mobility */}
      <div className="mb-5">
        <p className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Acceptez-vous de vous déplacer ?
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-x-5">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="isMobile"
              checked={isMobile}
              onChange={() => setIsMobile(true)}
              disabled={registerPro.isPending}
              required
            /> Oui
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="isMobile"
              checked={!isMobile}
              onChange={() => setIsMobile(false)}
              disabled={registerPro.isPending}
              required
            /> Non
          </label>
        </div>

        <label htmlFor="interventionRadius" className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">
          Rayon d'intervention: {interventionRadius} km
        </label>
        <input
          id="interventionRadius"
          type="range"
          min={0}
          max={200}
          step={1}
          value={interventionRadius}
          onChange={(e) => setInterventionRadius(Number(e.target.value))}
          disabled={registerPro.isPending}
          required
          className="w-full"
        />
      </div>

      {/* Contact & Password */}
      <div className="flex flex-row flex-wrap justify-center gap-x-2 mb-5">
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Email :
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={registerPro.isPending}
            required
            placeholder="example@mail.com"
            autoComplete="email"
            className="w-full p-1.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="tel" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Téléphone :
          </label>
          <input
            id="tel"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={registerPro.isPending}
            pattern="^0\d{9}$"
            placeholder="0123456789"
            autoComplete="tel"
            className="w-full p-1.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-row flex-wrap justify-center gap-x-2 mb-5">
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Mot de passe :
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={registerPro.isPending}
            required
            autoComplete="new-password"
            className="w-full p-1.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Confirmez le mot de passe :
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={registerPro.isPending}
            required
            autoComplete="new-password"
            className="w-full p-1.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <PasswordRules password={password} confirmPassword={confirmPassword} />

      <button
        type="submit"
        disabled={registerPro.isPending}
        className="w-full p-2.5 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        {registerPro.isPending ? 'Création du compte..' : 'Créer mon compte'}
      </button>
    </form>
  );
}

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { z } from 'zod';

import type { jwtPayload } from '../../../../../../packages/types/src/jwt.ts';
import { login } from '../authSlice.ts';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(14, 'Le mot de passe doit contenir au moins 14 caractères'),
});

type loginData = z.infer<typeof loginSchema>;

async function loginUser(data: loginData): Promise<jwtPayload> {
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return await res.json() as jwtPayload;
  } catch (error: unknown) {
    console.warn('Erreur lors de la connexion');
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Un erreur inconnue est survenue lors de la connexion.');
  }
}

type LoginProps = {
  onSuccess?: () => void;
};

function Login({ onSuccess }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log('Connexion réussie:', data);
      dispatch(login(data));
      onSuccess?.();
    },
    onError: (error: Error) => {
      setFormError(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setFormError(parsed.error.issues[0].message);
      return;
    }

    mutation.mutate(parsed.data);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit} className='max-w-sm mx-auto'>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      <div className='mb-5'>
        <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email :</label>
        <input
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
        <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Mot de passe :</label>
        <input
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
      <button
        type="submit"
        value="OK"
        disabled={mutation.isPending}
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
        {mutation.isPending ? 'Connexion..' : 'Se connecter'}
      </button>
    </form>
  );
}

export default Login;

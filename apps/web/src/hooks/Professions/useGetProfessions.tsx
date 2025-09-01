import { useState, useEffect, useCallback } from 'react';
import { z, ZodError } from 'zod';

import {
  professionResponseSchema,
} from '../../../../../packages/schemas/src/profession.schemas.ts';

type ProfessionResponse = z.infer<typeof professionResponseSchema>;

export function useGetProfessions() {
  const [professions, setProfessions] = useState<ProfessionResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfessions = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/professions/', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error('Impossible de récupérer les professions');
      }

      const data = await res.json();
      const parsedData = z.array(professionResponseSchema).parse(data);

      setProfessions(parsedData);
      setError(null);
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        console.error('Validation error:', error.issues);
        setError(new Error('Invalid data format from server'));
      } else if (error instanceof Error) {
        console.error('Error while fetching professions:', error.message);
        setError(error);
      } else {
        setError(new Error('Unknown error while fetching professions'));
      }
      setProfessions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfessions();
  }, [fetchProfessions]);

  return { professions, isLoading, error, refetch: fetchProfessions };
}

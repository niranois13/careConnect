import { useState, useEffect, useCallback } from 'react';
import { z, ZodError } from 'zod';
import {
  adminProfessionRelationsResponseSchema
} from '../../../../../packages/schemas/src/profession.schemas.ts';

type RelationsProfessionResponse = z.infer<typeof adminProfessionRelationsResponseSchema>;

export function useGetProfessionById(
  professionId: string,
  endpoint: string = '/api/professions',
) {
  const [profession, setProfession] = useState<RelationsProfessionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfession = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${endpoint}/${professionId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error('Impossible de récupérer les professions');
      }

      const data = await res.json();
      const parsedData = adminProfessionRelationsResponseSchema.parse(data);

      setProfession(parsedData);
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
      setProfession(null);
    } finally {
      setIsLoading(false);
    }
  }, [professionId, endpoint]);

  useEffect(() => {
    fetchProfession();
  }, [fetchProfession]);

  return { profession, isLoading, error, refetch: fetchProfession };
};

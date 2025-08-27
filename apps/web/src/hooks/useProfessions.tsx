import { useState, useEffect, useCallback } from 'react';
import { z, ZodError } from 'zod';

import {
  approvedProfessionResponseSchema,
  professionResponseSchema,
  adminProfessionRelationsResponseSchema
} from '../../../../packages/schemas/src/profession.schemas.ts';

type ApprovedProfessionResponse = z.infer<typeof approvedProfessionResponseSchema>;
type ProfessionResponse = z.infer<typeof professionResponseSchema>;
type RelationsProfessionResponse = z.infer<typeof adminProfessionRelationsResponseSchema>;

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

export function useGetApprovedProfessions() {
  const [professions, setProfessions] = useState<ApprovedProfessionResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProfessions = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/professions/approved', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
        if (!res.ok) {
          throw new Error('Impossible de récupérer les professions');
        }
        const data = await res.json();
        const parsedData = z.array(approvedProfessionResponseSchema).parse(data);

        parsedData.sort((a, b) => {
          if (a.professionName === 'Autre')
            return 1;
          if (b.professionName === 'Autre')
            return -1;
          return a.professionName.localeCompare(b.professionName);
        });

        setProfessions(parsedData);

      } catch (error: unknown) {
        if (error instanceof ZodError) {
          console.error("Validation error:", error.issues);
          setError(new Error("Invalid data format from server"));
        } else if (error instanceof Error) {
          console.error("Error while fetching users:", error.message);
          setError(error);
        } else {
          setError(new Error("Unknown error while fetching users"));
        }
        setProfessions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfessions();
  }, []);

  return { professions, isLoading, error };
}


export function useGetProfessionById(professionId: string) {
  const [profession, setProfession] = useState<RelationsProfessionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfession = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/professions/${professionId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
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
  }, []);

  useEffect(() => {
    fetchProfession();
  }, [fetchProfession]);

  return { profession, isLoading, error, refetch: fetchProfession };
};

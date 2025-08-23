import { useState, useEffect } from 'react';
import { z, ZodError } from 'zod';

import { approvedProfessionResponseSchema } from '../../../../packages/schemas/src/profession.schemas.ts';

type ProfessionResponse = z.infer<typeof approvedProfessionResponseSchema>;

export function useProfessions() {
  const [professions, setProfessions] = useState<ProfessionResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProfessions = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/professions');
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

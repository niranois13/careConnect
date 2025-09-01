import { useState, useEffect, useCallback } from 'react';
import { z, ZodError } from 'zod';
import {
  adminProfessionalRelationsResponseSchema
} from '../../../../../packages/schemas/src/users.schemas.ts';

type adminProfessional = z.infer<
  typeof adminProfessionalRelationsResponseSchema
>;

export function useGetProfessionalById(professionalId: string) {
  const [professional, setProfessional] = useState<adminProfessional | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfessional = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`/api/admin/professional/${professionalId}?role=PROFESSIONAL`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`Erreur HTTP ${res.status}`);
      }

      const json = await res.json();
      const parsedData = adminProfessionalRelationsResponseSchema.parse(json);
      setProfessional(parsedData);
      setError(null);
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.issues);
        setError(new Error("Invalid data format from server"));
      } else if (error instanceof Error) {
        console.error("Error while fetching professional:", error.message);
        setError(error);
      } else {
        setError(new Error("Unknown error while fetching professional"));
      }
      setProfessional(null);
    } finally {
      setIsLoading(false);
    }
  }, [professionalId]);

  useEffect(() => {
    fetchProfessional();
  }, [fetchProfessional]);

  return { professional, isLoading, error, refetch: fetchProfessional };
}

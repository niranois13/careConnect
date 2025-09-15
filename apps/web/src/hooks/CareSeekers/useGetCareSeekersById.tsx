import { useCallback, useEffect, useState } from "react";
import { z, ZodError } from 'zod';

import {
  adminCareSeekerRelationsResponseSchema,
} from "../../../../../packages/schemas/src/users.schemas.ts";

type adminCareSeeker = z.infer<typeof adminCareSeekerRelationsResponseSchema>;

export function useGetCareSeekerById(careSeekerId: string, endpoint: string = '/api/admin/careseeker') {
  const [careSeeker, setCareSeeker] = useState<adminCareSeeker | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCareSeeker = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`${endpoint}/${careSeekerId}?role=CARESEEKER`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error('Server error while fetching careSeerker by Id');
      }

      const json: unknown = await res.json();
      const parsedData = adminCareSeekerRelationsResponseSchema.safeParse(json);
      if (!parsedData.success) {
        console.error('parsedData error:', parsedData.error);
        throw new Error()
      }

      setCareSeeker(parsedData.data);
      setError(null);
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
      setCareSeeker(null);
    } finally {
      setIsLoading(false);
    }
  }, [careSeekerId, endpoint]);

  useEffect(() => {
    void fetchCareSeeker();
  }, [fetchCareSeeker]);

  return { careSeeker, isLoading, error, refetch: fetchCareSeeker };
}

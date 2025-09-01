import { useState, useEffect, useCallback } from "react";
import { z, ZodError } from 'zod';
import {
  professionalResponseSchema,
  userResponseSchema
} from "../../../../../packages/schemas/src/users.schemas.ts";


type User = z.infer<typeof userResponseSchema>;

export function useGetProfessionals(sortOrder: "asc" | "desc" = "desc") {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/users?role=PROFESSIONAL", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`Erreur HTTP ${res.status}`);
      }

      const json = await res.json();
      console.log('Users recevied:', json)
      const parsedData = z.array(professionalResponseSchema).parse(json);

      parsedData.sort((a, b) =>
        sortOrder === "desc"
          ? b.createdAt.getTime() - a.createdAt.getTime()
          : a.createdAt.getTime() - b.createdAt.getTime()
      );

      setUsers(parsedData);
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
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }, [sortOrder]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, isLoading, error, refetch: fetchUsers };
}

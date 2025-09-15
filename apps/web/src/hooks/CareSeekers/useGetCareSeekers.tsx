import { useCallback, useEffect, useState } from "react";
import { z, ZodError } from 'zod';

import {
  careSeekerResponseSchema,
  userResponseSchema
} from "../../../../../packages/schemas/src/users.schemas.ts";


type User = z.infer<typeof userResponseSchema>;

export function useGetCareSeekers(sortOrder: "asc" | "desc" = "desc") {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/users?role=CARESEEKER", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",

      });

      if (!res.ok) {
        throw new Error('Server error while fetching careSeeker');
      }

      const json: unknown = await res.json();
      const parsedData = z.array(careSeekerResponseSchema).parse(json);

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
    void fetchUsers();
  }, [fetchUsers]);

  return { users, isLoading, error, refetch: fetchUsers };
}

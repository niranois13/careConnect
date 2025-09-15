import { useCallback, useEffect, useState } from "react";
import { z, ZodError } from "zod";

import {
  userResponseSchema,
} from "../../../../../packages/schemas/src/users.schemas.ts";

type User = z.infer<typeof userResponseSchema>;

export function useGetUsers(sortOrder: "asc" | "desc" = "desc") {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`Error while fetching users`);
      }

      const json: unknown = await res.json();
      const parsedData = z.array(userResponseSchema).safeParse(json);
      if (!parsedData.success) {
        console.error("Zod validation errors:", parsedData.error.format()); // version lisible par champ
        console.error("Raw error details:", parsedData.error.errors); // version brute
        throw new Error('Data validation error while fetching users')
      }

      parsedData.data.sort((a, b) =>
        sortOrder === "desc"
          ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

      setUsers(parsedData.data);
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

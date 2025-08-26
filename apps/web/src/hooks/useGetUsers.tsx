import { useState, useEffect, useCallback } from "react";
import { z, ZodError } from "zod";
import { careSeekerResponseSchema, professionalResponseSchema, adminProfessionalRelationsResponseSchema, userResponseSchema, adminCareSeekerRelationsResponseSchema } from "../../../../packages/schemas/src/users.schemas.ts";

type User = z.infer<typeof userResponseSchema>;
type adminProfessional = z.infer<typeof adminProfessionalRelationsResponseSchema>;
type adminCareSeeker = z.infer<typeof adminCareSeekerRelationsResponseSchema>;

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
        throw new Error(`Erreur HTTP ${res.status}`);
      }

      const json = await res.json();
      const parsedData = z.array(userResponseSchema).parse(json.Users);

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
        throw new Error(`Erreur HTTP ${res.status}`);
      }

      const json = await res.json();
      const parsedData = z.array(careSeekerResponseSchema).parse(json.Users);

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
      const parsedData = z.array(professionalResponseSchema).parse(json.Users);

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

export function useGetCareSeekerById(careSeekerId: string) {
  const [careSeeker, setCareSeeker] = useState<adminCareSeeker | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCareSeeker = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`/api/admin/careseeker/${careSeekerId}?role=CARESEEKER`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`Erreur HTTP ${res.status}`);
      }

      const json = await res.json();
      const parsedData = adminCareSeekerRelationsResponseSchema.safeParse(json.careseeker);
      if (!parsedData.success) {
        console.log('parsedData error:', parsedData.error);
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
  }, [careSeekerId]);

  useEffect(() => {
    fetchCareSeeker();
  }, [fetchCareSeeker]);

  return { careSeeker, isLoading, error, refetch: fetchCareSeeker };
}

export function useGetProfessionalById(professionalId: string) {
  console.log('0. useGetProfessionalById called')
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
      const parsedData = adminProfessionalRelationsResponseSchema.parse(json.professional);
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

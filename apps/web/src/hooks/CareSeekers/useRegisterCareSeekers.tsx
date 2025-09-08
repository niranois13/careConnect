import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { z } from "zod";
import {
  careSeekerCreateSchema,
  careSeekerResponseSchema
} from "../../../../../packages/schemas/src/users.schemas.ts";

type RegisterData = z.infer<typeof careSeekerCreateSchema>;
type CareSeekerResponse = z.infer<typeof careSeekerResponseSchema>;

async function registerCareSeeker(data: RegisterData): Promise<CareSeekerResponse> {
  try {
    const parsedData = careSeekerCreateSchema.parse(data);

    const res = await fetch("/api/careseeker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedData),
    });

    const json = await res.json();
    const parsedResponse = careSeekerResponseSchema.safeParse(json);
    if (!parsedResponse.success) {
      throw new Error("Data validation error while fetching users");
    }

    return parsedResponse.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Erreur lors de l'enregistrement du profil.");
    }
  }
}

type UseRegisterCareSeekerOptions = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

export function useRegisterCareSeeker(options?: UseRegisterCareSeekerOptions) {
  return useMutation<CareSeekerResponse, Error, RegisterData>({
    mutationFn: registerCareSeeker,
    onSuccess: () => {
      toast.success("Compte créé avec succès !");
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      toast.error(error.message);
      options?.onError?.(error);
    },
  });
}

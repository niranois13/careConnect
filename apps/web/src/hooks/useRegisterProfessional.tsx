import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import type { z } from "zod";
import { professionalCreateSchema, professionalResponseSchema } from "../../../../packages/schemas/src/users.schemas.ts";

type RegisterData = z.infer<typeof professionalCreateSchema>;
type ProfessionalResponse = z.infer<typeof professionalResponseSchema>;

async function registerProfessional(data: RegisterData): Promise<ProfessionalResponse> {
  try {
    console.log('Avant registerProfessionl 1st parse:', data);
    const parsedData = professionalCreateSchema.parse(data);
    console.log('Après registerProfessionl 1st parse:', parsedData)

    const res = await fetch("/api/professional", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedData),
    });

    const json = await res.json();

    console.log('Avant registerProfessionl 2nd parse:', json);
    const parsedResponse = professionalResponseSchema.parse(json);
    console.log('Après registerProfessionl 2nd parse:', parsedResponse);

    return parsedResponse;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Erreur lors de l'enregistrement du professionel.");
    }
  }
}

type UseRegisterProfessionalOptions = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

export function useRegisterProfessional(options?: UseRegisterProfessionalOptions) {
  return useMutation<ProfessionalResponse, Error, RegisterData>({
    mutationFn: registerProfessional,
    onSuccess: () => {
      toast.success("Compte créé avec succès !");
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      const toastError = toast.error(error.message);
      console.log('toastError:', toastError)
      options?.onError?.(error);
    },
  });
}

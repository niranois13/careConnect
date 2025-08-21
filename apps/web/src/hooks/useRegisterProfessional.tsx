import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import type { z } from "zod";
import { ProfessionalSchema, updateProfessionalSchema } from "../../../../packages/schemas/src/users.schemas.ts";

type RegisterData = z.infer<typeof ProfessionalSchema>;
type ProfessionalResponse = z.infer<typeof updateProfessionalSchema>;

async function registerProfessional(data: RegisterData): Promise<ProfessionalResponse> {
  try {
    const parsedData = ProfessionalSchema.parse(data);

    const res = await fetch("/api/professional", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedData),
    });

    const json = await res.json();
    const parsedResponse = updateProfessionalSchema.parse(json);

    return parsedResponse;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Erreur lors de l'enregistrement du professionel.");
    }
  }
}

export function useRegisterProfessional(onSuccess?: () => void) {
  return useMutation<ProfessionalResponse, Error, RegisterData>({
    mutationFn: registerProfessional,
    onSuccess: () => {
      toast.success("Compte créé avec succès !");
      onSuccess?.();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

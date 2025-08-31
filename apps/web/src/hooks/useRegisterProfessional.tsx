import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { z } from "zod";
import { professionalCreateSchema, professionalResponseSchema } from "../../../../packages/schemas/src/users.schemas.ts";

type RegisterData = z.infer<typeof professionalCreateSchema>;
type ProfessionalResponse = z.infer<typeof professionalResponseSchema>;

async function registerProfessional(data: RegisterData): Promise<ProfessionalResponse> {
  try {
    const parsedData = professionalCreateSchema.parse(data);

    const res = await fetch("/api/professional", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedData),
    });

    const json = await res.json();
    console.log('Created Professional:', json)
    const parsedResponse = professionalResponseSchema.safeParse(json);
    if (!parsedResponse.success) {
      console.error("Zod validation failed:", parsedResponse.error);
      throw new Error;
    }

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
      toast.error(error.message);
      options?.onError?.(error);
    },
  });
}

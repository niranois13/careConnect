import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { z } from "zod";

import {
  professionUpdateResponseSchema,
  professionUpdateSchema
} from "../../../../../packages/schemas/src/profession.schemas.ts";

type UpdateProfessionData = z.infer<typeof professionUpdateSchema>;
type UpdateProfessionResponse = z.infer<typeof professionUpdateResponseSchema>;

export async function updateProfession(
  professionId: string,
  data: UpdateProfessionData
): Promise<UpdateProfessionResponse> {
  try {
    const parsedData = professionUpdateSchema.parse(data);

    const res = await fetch(`/api/admin/professions/${professionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedData),
    });

    if (!res.ok) {
      throw new Error('Erreur dans la mise à jour du professionel.');
    }

    const json = await res.json();
    const parsed = professionUpdateResponseSchema.safeParse(json);
    if (!parsed.success) {
      console.error("Zod validation failed:", parsed.error);
      throw new Error;
    }

    return parsed.data;

  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      throw new Error(error.issues[0]?.message ?? "Erreur de validation.");
    }
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Échec de la mise à jour utilisateur.");
  }
}

export function useUpdateProfession(
  professionId: string,
  options?: { onSuccess?: () => void }
) {
  return useMutation<UpdateProfessionResponse, Error, UpdateProfessionData>({
    mutationFn: (data) => updateProfession(professionId, data),
    onSuccess: () => {
      toast.success("Profession mise à jour avec succès !");
      options?.onSuccess?.()
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

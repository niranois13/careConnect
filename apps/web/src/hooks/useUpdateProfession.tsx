import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { z } from "zod";

import {
  adminProfessionRelationsResponseSchema,
  professionUpdateSchema
} from "../../../../packages/schemas/src/profession.schemas.ts";

type UpdateProfessionData = z.infer<typeof professionUpdateSchema>;
type UpdateProfessionResponse = z.infer<typeof adminProfessionRelationsResponseSchema>;

export async function updateProfession(professionId: string, data: UpdateProfessionData): Promise<UpdateProfessionResponse> {
  try {
    const parsedData = professionUpdateSchema.parse(data);

    const res = await fetch(`/api/admin/profession/${professionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedData),
    });

    if (!res.ok) {
      throw new Error('Erreur dans la mise à jour du professionel.');
    }

    const json = await res.json();
    const parsed = adminProfessionRelationsResponseSchema.safeParse(json.profession);
    if (!parsed.success)
      throw (parsed.error);

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

export function useUpdateProfession(professionId: string) {
  return useMutation<UpdateProfessionResponse, Error, UpdateProfessionData>({
    mutationFn: (data) => updateProfession(professionId, data),
    onSuccess: () => {
      toast.success("Utilisateur mis à jour avec succès !");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

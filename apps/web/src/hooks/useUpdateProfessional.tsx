import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { z } from "zod";

import { adminProfessionalRelationsResponseSchema, professionalUpdateSchema } from "../../../../packages/schemas/src/users.schemas.ts";

type UpdateProfessionalData = z.infer<typeof professionalUpdateSchema>;
type UpdateProfessionalResponse = z.infer<typeof adminProfessionalRelationsResponseSchema>;

async function updateProfessional(userId: string, data: UpdateProfessionalData): Promise<UpdateProfessionalResponse> {
  try {
    const parsedData = professionalUpdateSchema.parse(data);
    console.log('1. updateProfessional - parsedData:', parsedData);

    const res = await fetch(`/api/admin/professional/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedData),
    });

    if (!res.ok) {
      throw new Error('Erreur dans la mise à jour du professionel.');
    }

    const json = await res.json();
    const parsed = adminProfessionalRelationsResponseSchema.safeParse(json.professional);
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

export function useUpdateProfessional(userId: string) {
  return useMutation<UpdateProfessionalResponse, Error, UpdateProfessionalData>({
    mutationFn: (data) => updateProfessional(userId, data),
    onSuccess: () => {
      toast.success("Utilisateur mis à jour avec succès !");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

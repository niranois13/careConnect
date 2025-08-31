import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { z } from "zod";

import {
  adminCareSeekerRelationsResponseSchema,
  careSeekerUpdateSchema
} from "../../../../packages/schemas/src/users.schemas.ts";

type UpdateCareSeekerData = z.infer<typeof careSeekerUpdateSchema>;
type UpdateCareSeekerResponse = z.infer<typeof adminCareSeekerRelationsResponseSchema>;

async function updateCareSeeker(userId: string, data: UpdateCareSeekerData): Promise<UpdateCareSeekerResponse> {
  try {
    const parsedData = careSeekerUpdateSchema.parse(data);

    const res = await fetch(`/api/admin/careseeker/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedData),
    });

    if (!res.ok) {
      throw new Error('Erreur dans la mise à jour du professionel.');
    }

    const json = await res.json();
    const parsed = adminCareSeekerRelationsResponseSchema.safeParse(json.careSeeker);
    if (!parsed.success) {
      throw (parsed.error);
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

export function useUpdateCareSeeker(userId: string) {
  return useMutation<UpdateCareSeekerResponse, Error, UpdateCareSeekerData>({
    mutationFn: (data) => updateCareSeeker(userId, data),
    onSuccess: () => {
      toast.success("Utilisateur mis à jour avec succès !");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

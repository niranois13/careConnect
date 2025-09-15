import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { z } from "zod";

import {
  adminCareSeekerRelationsResponseSchema,
  careSeekerResponseSchema,
  careSeekerUpdateSchema
} from "../../../../../packages/schemas/src/users.schemas.ts";

type UpdateCareSeekerData = z.infer<typeof careSeekerResponseSchema>;
type UpdateCareSeekerResponse = z.infer<typeof adminCareSeekerRelationsResponseSchema>;

async function updateCareSeeker(userId: string, data: UpdateCareSeekerData): Promise<UpdateCareSeekerResponse> {
  try {
    console.log('Careseeker à update - avant fetch:', data)
    const parsedData = careSeekerUpdateSchema.safeParse(data);
    if (!parsedData.success) {
      console.error(parsedData.error.issues);
      throw new Error('Data mal formatée')
    }

    const res = await fetch(`/api/admin/careseeker/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedData.data),
    });

    if (!res.ok) {
      throw new Error('Erreur dans la mise à jour du professionel.');
    }

    const json: unknown = await res.json();
    console.log('Updated careseeker:', json)
    const parsed = adminCareSeekerRelationsResponseSchema.safeParse(json);
    if (!parsed.success) {
      console.error(parsed.error.issues);
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

export function useUpdateCareSeeker(
  userId: string,
  options?: { onSuccess?: () => void }
) {
  return useMutation<UpdateCareSeekerResponse, Error, UpdateCareSeekerData>({
    mutationFn: (data) => updateCareSeeker(userId, data),
    onSuccess: () => {
      toast.success("Utilisateur mis à jour avec succès !");
      options?.onSuccess?.()
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { z } from "zod";

import { baseUserSchema } from "../../../../../packages/schemas/src/users.schemas.ts";

type DeleteUserResponse = z.infer<typeof baseUserSchema>;

export async function deleteUser(userId: string): Promise<DeleteUserResponse> {
  try {
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Impossible de supprimer le professionnel");
    }

    const json: unknown = await res.json();
    const parsed = baseUserSchema.safeParse(json);
    if (!parsed.success) {
      console.error("Zod validation failed:", parsed.error);
      throw new Error("Erreur de validation du serveur.");
    }

    return parsed.data;
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      throw new Error(error.issues[0]?.message ?? "Erreur de validation.");
    }
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Échec de la suppression de l'utilisateur.");
  }
}

export function useDeleteUser(
  userId: string,
  options?: { onSuccess?: () => void }
) {
  return useMutation<DeleteUserResponse, Error, string>({
    mutationFn: () => deleteUser(userId),
    onSuccess: () => {
      toast.success("Utilisateur supprimé avec succès !");
      options?.onSuccess?.()
    },
    onError: (error: Error) => {
      console.error("Error deleting user:", error);
      toast.error(error.message);
    },
  });
}

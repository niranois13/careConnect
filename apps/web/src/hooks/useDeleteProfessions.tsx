import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { professionResponseSchema } from "../../../../packages/schemas/src/profession.schemas.ts";

type DeleteProfessionResponse = z.infer<typeof professionResponseSchema>;

export async function deleteProfession(professionId: string): Promise<DeleteProfessionResponse> {
  try {
    const res = await fetch(`/api/admin/professions/${professionId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Impossible de supprimer la profession");
    }

    const json = await res.json();
    const parsed = professionResponseSchema.safeParse(json.profession);
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
    throw new Error("Échec de la suppression de la profession.");
  }
}

export function useDeleteProfession(professionId: string) {
  return useMutation<DeleteProfessionResponse, Error, string>({
    mutationFn: () => deleteProfession(professionId),
    onSuccess: (data) => {
      console.log("Profession deleted successfully:", data);
      toast.success("Profession supprimée avec succès !");
    },
    onError: (error: Error) => {
      console.error("Error deleting profession:", error);
      toast.error(error.message);
    },
  });
}

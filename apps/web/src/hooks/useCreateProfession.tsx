import { useMutation } from "@tanstack/react-query";
import { z } from 'zod';

import { professionCreateSchema, approvedProfessionResponseSchema } from "../../../../packages/schemas/src/profession.schemas.ts";
import { toast } from "react-hot-toast";

type ProfessionPayload = z.infer<typeof professionCreateSchema>
type ProfessionResponse = z.infer<typeof approvedProfessionResponseSchema>

async function createProfession(
  payload: ProfessionPayload,
  endpoint: string,
): Promise<ProfessionResponse> {
  try {
    const parsedPayload = professionCreateSchema.parse(payload);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedPayload),
    });

    const json = await res.json();
    const parsedResponse = approvedProfessionResponseSchema.safeParse(json.profession);
    if (!parsedResponse.success) {
      console.error("Zod validation failed:", parsedResponse.error);
      throw new Error;
    }
    return parsedResponse.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Erreur lors de la création de la profession');
    }
  }
}

export function useCreateProfession(endpoint: string = "/api/professions") {
  return useMutation({
    mutationFn: (payload: ProfessionPayload) =>
      createProfession(payload, endpoint),
    onSuccess: () =>
      toast.success('La profession a bien été ajoutée'),
    onError: () =>
      toast.error('Erreur dans la création de la profession')
  });
}

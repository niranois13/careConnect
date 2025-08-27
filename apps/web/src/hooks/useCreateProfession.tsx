import { useMutation } from "@tanstack/react-query";
import { z } from 'zod';

import { professionCreateSchema, approvedProfessionResponseSchema } from "../../../../packages/schemas/src/profession.schemas.ts";

type ProfessionPayload = z.infer<typeof professionCreateSchema>
type ProfessionResponse = z.infer<typeof approvedProfessionResponseSchema>

async function createProfession(payload: ProfessionPayload): Promise<ProfessionResponse> {
  try {
    const parsedPayload = professionCreateSchema.parse(payload);
    const res = await fetch("/api/professions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedPayload),
    });

    const json = await res.json();
    const parsedResponse = approvedProfessionResponseSchema.parse(json);

    return parsedResponse;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error.message;
    } else {
      throw new Error('Erreur lors de la création de la profession');
    }
  }

}

export function useCreateProfession() {
  return useMutation({
    mutationFn: createProfession,
  });
}

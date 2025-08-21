import { useMutation } from "@tanstack/react-query";
import { z } from 'zod';

import { ProfessionSchema, RegisteredProfessionSchema } from "../../../../packages/schemas/src/profession.schemas.ts";

type ProfessionPayload = z.infer<typeof ProfessionSchema>
type ProfessionResponse = z.infer<typeof RegisteredProfessionSchema>

async function createProfession(payload: ProfessionPayload): Promise<ProfessionResponse> {
  try {
    const parsedPayload = ProfessionSchema.parse(payload);
    const res = await fetch("/api/professions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedPayload),
    });

    const json = await res.json();
    const parsedResponse = RegisteredProfessionSchema.parse(json);

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

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { z } from 'zod';
import { adminAddressCreateSchema, addressResponseSchema } from "../../../../packages/schemas/src/addresses.schemas.ts";

type AddressPayload = z.infer<typeof adminAddressCreateSchema>
type AddressResponse = z.infer<typeof addressResponseSchema>

async function createAddress(
  payload: AddressPayload,
  endpoint: string,
): Promise<AddressResponse> {
  try {
    const parsedPayload = adminAddressCreateSchema.parse(payload);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(parsedPayload),
    });

    const json: unknown = await res.json();
    const parsedResponse = addressResponseSchema.safeParse(json);
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

export function useCreateAddress(
  endpoint: string = "/api/admin/addresses",
  options?: { onSuccess?: () => void }
) {
  return useMutation<AddressResponse, Error, AddressPayload>({
    mutationFn: (payload: AddressPayload) =>
      createAddress(payload, endpoint),
    onSuccess: () => {
      toast.success("Adresse créée avec succès !");
      options?.onSuccess?.()
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

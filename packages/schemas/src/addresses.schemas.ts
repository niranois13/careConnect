import { z } from 'zod';

import { userResponseSchema } from './users.schemas.ts';


// -------------- BASE --------------
export const baseAddressSchema = z.object({
  label: z.string(),
  street: z.string().nullable(),
  postalCode: z.string().nullable(),
  city: z.string(),
});

export const addressResponseSchema = baseAddressSchema.extend({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  latitude: z.number().nullable().optional(),
  longitude: z.number().nullable().optional(),
  createdAt: z.string().datetime({ offset: true }).optional(),
  updatedAt: z.string().datetime({ offset: true }).optional(),
})

export const addressUserSchema = baseAddressSchema.extend({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  user: z.lazy(() => userResponseSchema)
});

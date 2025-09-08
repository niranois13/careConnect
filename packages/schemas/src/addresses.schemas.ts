import { z } from 'zod';

import { userResponseSchema } from './users.schemas.ts';


// -------------- BASE --------------
export const BaseAddressSchema = z.object({
  id: z.string().uuid(),
  label: z.string().default('DOMICILE'),
  street: z.string().nullable(),
  postalCode: z.string().length(5),
  city: z.string(),
})

// -------------- REQUESTS --------------
export const addressCreateSchema = BaseAddressSchema.omit({
  id: true
}).extend({
  userId: z.string().uuid()
})

export const adminAddressUpdateSchema = BaseAddressSchema.extend({
  userId: z.string().uuid(),
  longitude: z.number().nullable(),
  latitude: z.number().nullable(),
})

export const addressUpdateSchema = BaseAddressSchema.extend({
  userId: z.string().uuid()
})

// -------------- RESPONSES --------------
export const addressResponseSchema = BaseAddressSchema.extend({
  userId: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
  updatedAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
})

export const addressRelationsResponseSchema = addressResponseSchema.extend({
  user: userResponseSchema
})

export const adminAddressResponseSchema = BaseAddressSchema.extend({
  userId: z.string().uuid(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  createdAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
  updatedAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
})

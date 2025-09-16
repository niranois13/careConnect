import { z } from 'zod';

import { addressResponseSchema, baseAddressSchema } from './addresses.schemas.ts';
import { professionResponseSchema } from './profession.schemas.ts';

//
// ---------- HELPERS ----------
//
const alphaRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;
export const nameField = z.string()
  .trim()
  .min(2)
  .max(25)
  .regex(alphaRegex, "Prénom / Nom ne peuvent être composés que de lettres, tirets et apostrophes.");

export const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{14,}$/;
export const passField = z.string().regex(passRegex, "Le mot de passe doit être au minimum de 14 caractères dont au moins 1 lettre, 1 majuscule, 1 nombre et 1 caractère spécial");

export const phoneField = z.string()
  .transform(val => val.trim() === "" ? null : val.trim())  // on nettoie et on transforme "" -> null
  .nullable()
  .refine(val => val === null || (val.length >= 10 && val.length <= 12), {
    message: "Le numéro de téléphone doit contenir entre 10 et 12 caractères",
  });

export const siretField = z.string()
  .transform(val => val === "" ? null : val)
  .nullable()
  .refine(val => val === null || /^\d{14}$/.test(val), {
    message: "Le SIRET doit contenir exactement 14 chiffres",
  })
  .optional();

export const roleQuerySchema = z.object({
  role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN']).optional(),
});

export const jwtPayloadSchema = z.object({
  id: z.string().uuid(),
  role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN', 'GUEST']),
  email: z.string()
})

// ---------- BASE USER SCHEMAS ----------
export const baseUserSchema = z.object({
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  lastName: nameField,
  firstName: nameField,
  phoneNumber: phoneField,
  role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN']),
  address: z.lazy(() => z.array(addressResponseSchema)),
});

export const userCreateSchema = baseUserSchema.omit({
  address: true,
})
  .extend({
    password: passField,
    address: z.lazy(() => z.array(baseAddressSchema)),
  });


export const userResponseSchema = baseUserSchema.extend({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }),
  updatedAt: z.string().datetime({ offset: true }),
});

// ---------- CARESEEKER SCHEMAS ----------
export const careSeekerCreateSchema = userCreateSchema.extend({
  role: z.literal('CARESEEKER'),
  isHelper: z.boolean().default(false),
});

export const careSeekerResponseSchema = userResponseSchema.extend({
  role: z.literal('CARESEEKER'),
  isHelper: z.boolean().default(false),
});

export const careSeekerUpdateSchema = baseUserSchema.extend({
  role: z.literal('CARESEEKER'),
  isHelper: z.boolean().default(false),
});

// ---------- PROFESSIONAL SCHEMAS ----------
export const professionalCreateSchema = userCreateSchema.extend({
  role: z.literal('PROFESSIONAL'),
  isMobile: z.boolean().default(false),
  interventionRadius: z.number().default(0),
  siret: siretField,
  isSiretValid: z.boolean().default(false),
  professionId: z.string().uuid().optional(),
});

export const professionalResponseSchema = userResponseSchema.extend({
  role: z.literal('PROFESSIONAL'),
  isMobile: z.boolean(),
  interventionRadius: z.number(),
  siret: siretField,
  isSiretValid: z.boolean(),
  professionId: z.string().uuid().optional(),
});

export const professionalUpdateSchema = z.object({
  firstName: nameField,
  lastName: nameField,
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  phoneNumber: phoneField,
  isMobile: z.boolean(),
  interventionRadius: z.number(),
  siret: siretField,
  isSiretValid: z.boolean(),
  professionId: z.string().uuid(),
  professionName: z.string().trim().min(1, "Le nom de la profession est requis"),
  customProfession: z.string().trim().optional(),
  isProfessionApproved: z.boolean().default(true),
});

export const professionalSearchResultSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.literal("PROFESSIONAL"),
  professionName: z.string().nullable(),
  customProfession: z.string().nullable(),
  city: z.string(),
  isMobile: z.boolean().optional(),
  interventionRadius: z.number().optional()
});

// ---------- ADMIN RELATION SCHEMAS ----------
export const adminCareSeekerRelationsResponseSchema = z.object({
  isHelper: z.boolean(),
  user: userResponseSchema,
});

export const adminProfessionalRelationsResponseSchema = z.object({
  isMobile: z.boolean(),
  interventionRadius: z.number(),
  siret: siretField,
  isSiretValid: z.boolean(),
  user: userResponseSchema,
  profession: z.lazy(() => professionResponseSchema),
});

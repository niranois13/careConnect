import { z } from 'zod';

import { professionResponseSchema } from './profession.schemas.ts';

const alphaRegex: RegExp = /^[A-Za-zÀ-ÿ\s'-]+$/;
const nameField = z
  .string()
  .trim()
  .min(2)
  .max(25)
  .regex(alphaRegex, "Prénom / Nom ne peuvent être composés que de lettres, tirets et apostrophes.");

const passRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{14,}$/;
const passField = z
  .string()
  .regex(passRegex, "Le mot de passe doit être au minimum de 14 caractères dont au moins 1 lettre, 1 majuscule, 1 nombre et 1 caractère spécial");

// ---------- BASE ----------
export const baseUserSchema = z.object({
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  lastName: nameField,
  firstName: nameField,
  phoneNumber: z.string().trim().min(10).max(12).nullable(),
  role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN']),
});

// ---------- REQUEST SCHEMAS ----------
export const userCreateSchema = baseUserSchema.extend({
  password: passField, // only for input
});

export const careSeekerCreateSchema = userCreateSchema.extend({
  role: z.literal('CARESEEKER'),
  isHelper: z.boolean().default(false),
});

export const professionalCreateSchema = userCreateSchema.extend({
  role: z.literal('PROFESSIONAL'),
  isMobile: z.boolean().default(false),
  interventionRadius: z.number().default(0),
  siret: z.string()
    .transform(val => val === "" ? null : val) // normalize empty string to null
    .nullable()
    .refine(val => val === null || /^\d{14}$/.test(val), {
      message: "Le SIRET doit contenir exactement 14 chiffres",
    })
    .optional(),
  isSiretValid: z.boolean().default(false),
  professionId: z.string().uuid().optional(),
});

// ---------- RESPONSE SCHEMAS ----------
export const userResponseSchema = baseUserSchema.extend({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
  updatedAt: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
  role: z.string(),
});

export const careSeekerResponseSchema = userResponseSchema.extend({
  role: z.literal('CARESEEKER'),
  isHelper: z.boolean().default(false),
});

export const professionalResponseSchema = userResponseSchema.extend({
  role: z.literal('PROFESSIONAL'),
  isMobile: z.boolean(),
  interventionRadius: z.number(),
  siret: z.string()
    .transform(val => val === "" ? null : val)
    .nullable()
    .refine(val => val === null || /^\d{14}$/.test(val), {
      message: "Le SIRET doit contenir exactement 14 chiffres",
    })
    .optional(),
  isSiretValid: z.boolean(),
  professionId: z.string().uuid().optional(),
});

export const adminProfessionalRelationsResponseSchema = z.object({
  isMobile: z.boolean(),
  interventionRadius: z.number(),
  siret: z.string().nullable(),
  isSiretValid: z.boolean(),
  user: userResponseSchema,
  profession: z.lazy(() => professionResponseSchema),
});

export const careSeekerUpdateSchema = z.object({
  firstName: nameField,
  lastName: nameField,
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  phoneNumber: z.string()
    .transform(val => val === "" ? null : val)
    .nullable()
    .refine(val => val === null || (val.length >= 10 && val.length <= 12), {
      message: "Le numéro de téléphone doit contenir entre 10 chiffres (0123456789) et 12 caractères (+33123456780)"
    }),
  isHelper: z.boolean().default(false),
});

export const adminCareSeekerRelationsResponseSchema = z.object({
  isHelper: z.boolean(),
  user: userResponseSchema,
});

export const professionalUpdateSchema = z.object({
  firstName: nameField,
  lastName: nameField,
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  phoneNumber: z.string()
    .transform(val => val === "" ? null : val)
    .nullable()
    .refine(val => val === null || (val.length >= 10 && val.length <= 12), {
      message: "Le numéro de téléphone doit contenir entre 10 chiffres (0123456789) et 12 caractères (+33123456780)"
    }),
  isMobile: z.boolean(),
  interventionRadius: z.number(),
  siret: z.string()
    .transform(val => val === "" ? null : val)
    .nullable()
    .refine(val => val === null || /^\d{14}$/.test(val), {
      message: "Le SIRET doit contenir exactement 14 chiffres",
    })
    .optional(),
  isSiretValid: z.boolean(),
  professionId: z.string().uuid("L'id de la profession est requis"),
  professionName: z.string().trim().min(1, 'Le nom de la profession est requis'),
  customProfession: z.string().trim().optional(),
  isProfessionApproved: z.boolean().default(true),
});

// ---------- QUERIES ----------
export const roleQuerySchema = z.object({
  role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN']).optional(),
});

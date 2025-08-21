import { z } from 'zod';

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
  isHelper: z.boolean().default(false).optional(),
});

export const professionalCreateSchema = userCreateSchema.extend({
  role: z.literal('PROFESSIONAL'),
  isMobile: z.boolean().default(false),
  interventionRadius: z.number().default(0),
  siret: z.string().trim().length(14),
  isSiretValid: z.boolean().default(false),
  professionId: z.string().uuid().optional(),
});

// ---------- RESPONSE SCHEMAS ----------
export const userResponseSchema = baseUserSchema.extend({
  id: z.string().uuid(),  // standardise sur `id`
});

export const careSeekerResponseSchema = userResponseSchema.extend({
  role: z.literal('CARESEEKER'),
  isHelper: z.boolean().default(false).optional(),
});

export const professionalResponseSchema = userResponseSchema.extend({
  role: z.literal('PROFESSIONAL'),
  isMobile: z.boolean(),
  interventionRadius: z.number(),
  siret: z.string().length(14),
  isSiretValid: z.boolean(),
  professionId: z.string().uuid().optional(),
});

// ---------- QUERIES ----------
export const roleQuerySchema = z.object({
  role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN']).optional(),
});

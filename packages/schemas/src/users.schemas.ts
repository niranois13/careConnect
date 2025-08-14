import { z } from 'zod';

const alphaRegex: RegExp = /^[A-Za-zÀ-ÿ\s'-]+$/;
const nameField = z
  .string()
  .max(25)
  .regex(alphaRegex,
    'Prénom / Nom ne peuvent être composés que de lettres et caracères spéciaux'
  );

const passRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{14,}$/;
const passField = z
  .string()
  .regex(passRegex,
    'Le mot de passe doit être au minimum de 14 caractères \
    dont au moins 1 lettre, 1 majuscule, 1 nombre et 1 caractère spécial'
  );

export const baseUserSchema = z.object({
  email: z.string().email(),
  password: passField,
  lastName: nameField,
  firstName: nameField,
  phoneNumber: z.string().nullable(),
  role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN']),
});

export const CareSeekerSchema = baseUserSchema.extend({
  role: z.literal('CARESEEKER'),
  isHelper: z.boolean().default(false).optional(),
});

export const ProfessionalSchema = baseUserSchema.extend({
  role: z.literal('PROFESSIONAL'),
  isMobile: z.boolean().default(false),
  interventionRadius: z.number().default(0),
});

export const roleQuerySchema = z.object({
  role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN']).optional(),
});

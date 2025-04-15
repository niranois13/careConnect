import { z } from 'zod';

const alphaRegex: RegExp = /^[A-Za-zÀ-ÿ\s'-]+$/;
const nameField = z
  .string()
  .max(25)
  .regex(alphaRegex, 'A name can only contain letters and special characters');

export const baseUserSchema = z.object({
  email: z.string().email(),
  password: z.string(), // hashed one, for the DB
  lastName: nameField,
  firstName: nameField,
  phoneNumber: z.string().optional(),
  role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN']),
});

// baseUserSchema : To use in front-end when gathering user inputs, for pw validation
export const baseUserSchemaRegistration = baseUserSchema.extend({
  passwordConfirm: z.string().min(14),
});

export const CareSeekerSchema = z.object({
  role: z.literal('CARESEEKER'),
  isHelper: z.boolean().default(false),
});

export const ProfessionalSchema = baseUserSchema.extend({
  role: z.literal('PROFESSIONAL'),
  isMobile: z.boolean().default(false),
  interventionRadius: z.number().default(0),
});

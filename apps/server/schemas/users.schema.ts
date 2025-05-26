import { z } from 'zod';

import { env } from '../../../env.ts';

const ADMIN_KEY =  env.ADMIN_KEY;
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

export const CareSeekerSchema = baseUserSchema.extend({
  role: z.literal('CARESEEKER'),
  isHelper: z.boolean().default(false),
});

export const ProfessionalSchema = baseUserSchema.extend({
  role: z.literal('PROFESSIONAL'),
  isMobile: z.boolean().default(false),
  interventionRadius: z.number().default(0),
});

export const AdminSchema = baseUserSchema.extend({
  role: z.literal('ADMIN'),
  adminKey: z.string().refine(
    (val) => val === ADMIN_KEY,
    (val) => ({ message: `Invalid admin key: ${val}`}),
  ),
});

export const roleQuerySchema = z
  .object({
    role: z.enum(['CARESEEKER', 'PROFESSIONAL', 'ADMIN']).optional(),
  });

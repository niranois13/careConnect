import { z } from 'zod';

export const ProfessionSchema = z.object({
  professionName: z.string().trim().min(1, 'Le nom de la profession est requis'),
  customProfession: z.string().trim().optional(),
  isCustomProfessionApproved: z.boolean().default(false),
});

export const CustomProfessionSchema = z.object({
  professionName: z.literal('Autre'),
  customProfession: z.string().trim().min(2, 'Une profession personnalisée est requise'),
  isCustomProfessionApproved: z.boolean().default(false),
});

export const RegisteredProfessionSchema = z.object({
  id: z.string().uuid("L'id de la profession est requis"),
  professionName: z.string().trim().min(1, 'Le nom de la profession est requis'),
  customProfession: z.string().trim().optional(),
  isCustomProfessionApproved: z.boolean().default(false),
})

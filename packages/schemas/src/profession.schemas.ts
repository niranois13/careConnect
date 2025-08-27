import { z } from 'zod';

import { professionalResponseSchema as _professionalResponseSchema} from './users.schemas.ts';

// ---------- Request ----------
export const professionCreateSchema = z.object({
  professionName: z.string().trim().min(1, 'Le nom de la profession est requis'),
  customProfession: z.string().trim().optional(),
  isProfessionApproved: z.boolean().default(false),
});

export const customProfessionCreateSchema = z.object({
  professionName: z.literal('Autre'),
  customProfession: z.string().trim().min(2, 'Une profession personnalisée est requise'),
  isProfessionApproved: z.boolean().default(false),
});

export const professionUpdateSchema = z.object({
  professionName: z.string().trim().min(1, 'Le nom de la profession est requis'),
  customProfession: z.string().trim().min(2, 'Une profession personnalisée est requise'),
  isProfessionApproved: z.boolean().default(false),
})

// ---------- Response ----------
export const approvedProfessionResponseSchema = z.object({
  id: z.string().uuid("L'id de la profession est requis"),
  professionName: z.string().trim().min(1, 'Le nom de la profession est requis'),
  customProfession: z.string().trim().optional(),
  isProfessionApproved: z.boolean().default(true),
})

export const professionResponseSchema = z.object({
  id: z.string().uuid("L'id de la profession est requis"),
  professionName: z.string().trim().min(1, 'Le nom de la profession est requis'),
  customProfession: z.string().trim().optional(),
  isProfessionApproved: z.boolean().default(false),
})

export const adminProfessionRelationsResponseSchema = z.object({
  id: z.string().uuid("L'id de la profession est requis"),
  professionName: z.string().trim().min(1, 'Le nom de la profession est requis'),
  customProfession: z.string().trim().optional(),
  isProfessionApproved: z.boolean().default(false),
  professional: z.lazy(() => _professionalResponseSchema),
});


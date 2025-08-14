import { z } from 'zod';

import {
  AdminSchema,
  baseUserSchema,
  CareSeekerSchema,
  ProfessionalSchema,
  roleQuerySchema
} from '../../schemas/src/index.ts';

export type User = z.infer<typeof baseUserSchema>;
export type Admin = z.infer<typeof AdminSchema>;
export type CareSeeker = z.infer<typeof CareSeekerSchema>;
export type Professional = z.infer<typeof ProfessionalSchema>;
export type RoleQuery = z.infer<typeof roleQuerySchema>;

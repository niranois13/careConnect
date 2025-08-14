import { z } from 'zod';

import { env } from '../../../env.ts';
import { baseUserSchema } from './users.schemas.ts';

const ADMIN_KEY = env.ADMIN_KEY;

export const AdminSchema = baseUserSchema.extend({
  role: z.literal('ADMIN'),
  adminKey: z.string().refine(
    (val) => val === ADMIN_KEY,
    (val) => ({ message: `Invalid admin key: ${val}` }),
  ),
});

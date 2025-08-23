import { z } from 'zod';

import { env } from '../../../env.ts';
import { userCreateSchema } from './users.schemas.ts';

const ADMIN_KEY = env.ADMIN_KEY;

export const adminCreateSchema = userCreateSchema.extend({
  role: z.literal('ADMIN'),
  adminKey: z.string().refine(
    (val) => val === ADMIN_KEY,
    { message: `Invalid credentials` },
  ),
}).omit({ adminKey: true } );

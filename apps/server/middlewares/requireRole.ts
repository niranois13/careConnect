import type { NextFunction,Response } from 'express';

import type { UserRole } from '../../../packages/types/src/jwt.ts';
import type { AuthRequest } from './requireAuth.ts';
import { requireAuth } from './requireAuth.ts';

export function requireRole(...allowedRoles: UserRole[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    requireAuth(req, res, (error?: unknown) => {
      if (error) return;

      if (!req.user || !allowedRoles.includes(req.user.role)) {
        res.status(404).json({ error: 'Not found' });
        return
      }

      next();
    });
  };
}

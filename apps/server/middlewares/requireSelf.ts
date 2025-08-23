import type { NextFunction,Response } from 'express';

import type { AuthRequest } from './requireAuth.ts';
import { requireAuth } from './requireAuth.ts';

export function requireSelf() {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    requireAuth(req, res, (error?: unknown) => {
      if (error) return;

      const targetId = req.params.id;

      if (!targetId) {
        res.status(400).json({ error: 'Missing target user ID' });
        return;
      }

      if (!req.user || req.user.id !== targetId) {
        res.status(404).json({ error: 'Not found' });
        return;
      }

      next();
    });
  };
}

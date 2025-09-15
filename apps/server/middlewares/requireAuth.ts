import type { NextFunction,Request, Response } from 'express';

import type { jwtPayload } from '../../../packages/types/src/jwt.ts';
import { verifyToken } from '../src/jwtHandler.ts';

export interface AuthRequest extends Request {
  user?: jwtPayload;
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const cookies = req.cookies as { [key: string]: string | undefined } | undefined;
  const token = cookies?.token;

  if (!token) {
    res.status(401).json({ error: 'Authentication required' });
    return;
  }

  try {
    const payload = verifyToken(token);

    req.user = {
      id: payload.id,
      email: payload.email,
      role: payload.role,
    };

    next();
  } catch (error) {
    console.error('Error in requireAuth:', error);
    res.status(403).json({ error: 'Invalid or expired token' });
    return;
  }
}

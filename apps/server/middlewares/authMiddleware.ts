import type { NextFunction, Request, Response } from 'express';

import { verifyToken } from '../src/jwtHandler.ts';

export function authenticate(req: Request, res: Response, next: NextFunction): void {
  const cookies = req.cookies as { [key: string]: string | undefined } | undefined;
  const token = cookies?.token;

  if (!token) {
    res.status(401).json({ error: 'No token found, authentication required' });
    return;
  }

  try {
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (error: unknown) {
    console.error('Error in authenticate():', error);
    res.status(403).json({ error: 'Invalid or expired token' });
    return;
  }
}

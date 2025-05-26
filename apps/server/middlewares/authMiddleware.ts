import { NextFunction,Request, Response } from 'express';

import { type jwtPayload, verifyToken } from '../src/jwtHandler.ts';

declare module 'express' {
  interface Request {
    user?: jwtPayload;
    cookies?: {
      [key: string]: string | undefined
    };
  }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: 'No token found, authentication required' });
  }

  try {
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (error: unknown) {
    console.error('Error in authenticate():', error);
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
}



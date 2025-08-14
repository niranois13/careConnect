import type { Response } from 'express';
import jwt from 'jsonwebtoken';

import { env } from '../../../env.ts';
// import type {  } from 'packages/types/src/jwt.ts';
import type { jwtPayload } from '../../../packages/types/src/jwt.ts';

const JWT_SECRET: string = env.JWT_SECRET;
const JWT_EXP: number = env.JWT_EXP;

export type token = string;

export function generateToken(payload: jwtPayload): token {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXP });
  return token;
}

export function verifyToken(token: string) {
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
}

export function generateCookie(res: Response, token: string) {
  res.cookie('token', token, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: JWT_EXP * 1000,
    path: '/',
  });
}

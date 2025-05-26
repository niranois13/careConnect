import type { Response } from 'express';
import jwt from 'jsonwebtoken';

import { env } from '../../../env.ts';

const JWT_SECRET: string = env.JWT_SECRET;
const JWT_EXP: number = env.JWT_EXP;

export type jwtPayload = {
  id: string;
  role: string;
};

export type token =  string;

export function generateToken(payload: jwtPayload): token {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXP });
  return token;
}

export function verifyToken(token: string): jwtPayload {
  const payload = jwt.verify(token, JWT_SECRET) as jwtPayload;
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

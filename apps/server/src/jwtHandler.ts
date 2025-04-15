import type { Response } from 'express';
import jwt from 'jsonwebtoken';

import { env } from '../../../env.ts';

const JWT_SECRET: string = env.JWT_SECRET;
const JWT_EXP: number = env.JWT_EXP;

type JwtPayload = {
  id: string;
  role: string;
};

export function generateToken(payload: JwtPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXP });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
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

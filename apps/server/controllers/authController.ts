import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';

import { loginSchema } from '../../../packages/schemas/src/auth.schemas.ts';
import { PrismaClient } from '../prisma/generated/index.js';
import { generateCookie, generateToken } from '../src/jwtHandler.ts';
import { handleError } from './handleError.ts';


const prisma = new PrismaClient();

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = loginSchema.parse(req.body);

    const User = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!User) {
      throw new Error('Invalid credentials')
    }

    const isPasswordValid = await bcrypt.compare(password, User.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials')
    }

    const token = generateToken({ id: User.id, email: User.email, role: User.role });
    generateCookie(res, token);

    return res.status(200).json({
      "id": User.id,
      "email": User.email,
      "role": User.role
    });

  } catch (error: unknown) {
    handleError(error, res, 'loginUser');
  }
}

export function logout(req: Request, res: Response) {
  try {
    res.clearCookie('token');
    return res.status(200).json({ message: 'Token successfully cleared.' });
  } catch (error: unknown) {
    handleError(error, res, 'logout');
  }
}

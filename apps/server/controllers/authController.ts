import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import { z } from 'zod';

import { loginSchema } from '../../../packages/schemas/src/auth.schemas.ts';
import { PrismaClient } from '../prisma/generated/prisma-users/index.js';
import { generateCookie, generateToken } from '../src/jwtHandler.ts';

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
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, User.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken({ id: User.id, email: User.email, role: User.role });
    generateCookie(res, token);

    return res.status(200).json({
      user: {
        id: User.id,
        email: User.email,
        firstName: User.firstName,
        lastName: User.lastName,
        role: User.role,
      },
    });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Error in creatCareSeeker:', error.issues);
      return res.status(400).json({ error: error.issues });
    }
    console.error('Error in userLogin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export function logout(req: Request, res: Response) {
  try {
    res.clearCookie('token');
    return res.status(200).json({ message: 'Token successfully cleared.' });
  } catch (error: unknown) {
    console.error('Error in logout:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

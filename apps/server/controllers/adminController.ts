import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import { z } from 'zod';

import { Prisma, PrismaClient } from '../prisma/generated/prisma-users/index.js';
import { AdminSchema } from '../schemas/users.schema.ts'

const prisma: PrismaClient = new PrismaClient();

export async function createAdmin(req: Request, res: Response) {
  try {
    const adminData = AdminSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(adminData.password, 10);

    const newAdmin = await prisma.user.create({
      data: {
        email: adminData.email,
        password: hashedPassword,
        firstName: adminData.firstName,
        lastName: adminData.lastName,
        phoneNumber: adminData.phoneNumber,
        role: 'ADMIN',
      },
    });

    const newAdminResp = {
      id: newAdmin.id,
      email: newAdmin.email,
      firstName: newAdmin.firstName,
      lastName: newAdmin.lastName,
      role: newAdmin.role,
    };

    return res.status(201).json({ 'Admin added': newAdminResp });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Error in createAdmin:', error.issues);
      return res.status(400).json({ error: error.issues });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(400).json({ error: 'Email and/or Phone number already in use.' });
        case 'P2003':
          return res.status(400).json({ error: 'Invalid foreign key reference.' });
        case 'P2000':
          return res.status(400).json({ error: 'Input too long for a field.' });
        case 'P2025':
          return res.status(404).json({ error: 'Resource not found.' });
      }

      console.error('Error in createAdmin:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

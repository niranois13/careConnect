import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import { z } from 'zod';

import { adminCreateSchema } from '../../../packages/schemas/src/admins.schema.ts';
import { Prisma, PrismaClient } from '../prisma/generated/index.js';
import { handleError } from './handleError.ts';

const prisma: PrismaClient = new PrismaClient();

export async function createAdmin(req: Request, res: Response) {
  try {
    const adminData = adminCreateSchema.parse(req.body);
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
    handleError(error, res, 'createAdmin')
  }
}

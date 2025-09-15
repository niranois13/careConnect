import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';

import { adminCreateSchema } from '../../../packages/schemas/src/admins.schema.ts';
import { baseUserSchema } from '../../../packages/schemas/src/users.schemas.ts';
import { PrismaClient } from '../prisma/generated/index.js';
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

export async function adminDeleteUserById(req: Request, res: Response) {
  try {
    console.log('Here I am, saying goodbye to this user:', req.params.id)
    if (!req.params.id || typeof req.params.id !== 'string') {
      throw new Error('Not found')
    }

    const deletedUser = await prisma.user.delete({
      where: { id: req.params.id },
      select: {
        email: true,
        emailVerified: true,
        lastName: true,
        firstName: true,
        phoneNumber: true,
        role: true,
        address: true
      }
    })

    const parsedUser = baseUserSchema.safeParse({
      ...deletedUser,
      address: deletedUser.address.map(addr => ({
        ...addr,
        createdAt: addr.createdAt.toISOString(),
        updatedAt: addr.updatedAt.toISOString(),
      }))
    });
    if (!parsedUser.success) {
      throw new Error('Validation error while deleting User')
    }
    return res.status(201).json(parsedUser.data)
  } catch (error: unknown) {
    return handleError(error, res, 'adminDeleteUserById');
  }
}

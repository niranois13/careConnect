import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import { z } from 'zod';

import { CareSeekerSchema, ProfessionalSchema, roleQuerySchema } from '../../../packages/schemas/src/users.schemas.ts'
import { Prisma, PrismaClient } from '../prisma/generated/prisma-users/index.js';

const prisma: PrismaClient = new PrismaClient();

const selectFields = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  phoneNumber: true,
  role: true,
};

export async function createCareSeeker(req: Request, res: Response) {
  try {
    const userData = CareSeekerSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        role: 'CARESEEKER',
        careSeekers: {
          create: {
            isHelper: userData.isHelper,
          },
        },
      },
      include: {
        careSeekers: true,
      },
    });

    const newUserResp = {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      role: newUser.role,
    };

    return res.status(201).json({ 'User added': newUserResp });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Error in createCareSeeker:', error.issues);
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

      console.error('Error in createCareSeeker:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export async function createProfessional(req: Request, res: Response) {
  try {
    const ProfessionalData = ProfessionalSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(ProfessionalData.password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: ProfessionalData.email,
        password: hashedPassword,
        firstName: ProfessionalData.firstName,
        lastName: ProfessionalData.lastName,
        phoneNumber: ProfessionalData.phoneNumber,
        role: 'PROFESSIONAL',
        professionals: {
          create: {
            isMobile: ProfessionalData.isMobile,
            interventionRadius: ProfessionalData.interventionRadius,
          },
        },
      },
      include: {
        professionals: true,
      },
    });

    const newUserResp = {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      role: newUser.role,
    };

    return res.status(201).json({ 'User added': newUserResp });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Error in createProfessional:', error.issues);
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

      console.error('Error in createProfessional:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const parseResult = roleQuerySchema.safeParse(req.query);

    if (!parseResult.success) {
      return res.status(400).json({ error: 'Invalid role filter' });
    }

    const role = parseResult.data.role;

    const Users = await prisma.user.findMany({
      where: {
        role: role,
      },
      select: selectFields,
    });
    return res.status(200).json({ Users: Users });
  } catch (error: unknown) {
    console.error('Error in getUsers:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

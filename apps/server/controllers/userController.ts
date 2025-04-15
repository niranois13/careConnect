import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import { z } from 'zod';

import { Prisma, PrismaClient } from '../prisma/generated/prisma-users/index.js';
import { baseUserSchema, CareSeekerSchema, ProfessionalSchema } from '../schemas/users.schema.ts';

const prisma: PrismaClient = new PrismaClient();

export async function createCareSeeker(req: Request, res: Response) {
  try {
    const userData = baseUserSchema.parse(req.body);
    const careSeekerData = CareSeekerSchema.parse(req.body);
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
            isHelper: careSeekerData.isHelper,
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
      console.error('Error in creatCareSeeker:', error.issues);
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
    const userData = baseUserSchema.parse(req.body);
    const ProfessionalData = ProfessionalSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
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
      console.error('Error in creatCareSeeker:', error.issues);
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

export async function getUsers(req: Request, res: Response) {
  try {
    switch (req.body) {
      case 'CARESEEKER': {
        const Users = await prisma.user.findMany({
          where: {
            role: 'CARESEEKER',
          },
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            role: true,
          },
        });
        return res.status(200).json({ Users: Users });
      }
      case 'PROFESSIONAL': {
        const Users = await prisma.user.findMany({
          where: {
            role: 'PROFESSIONAL',
          },
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            role: true,
          },
        });
        return res.status(200).json({ Users: Users });
      }
      default: {
        const Users = await prisma.user.findMany({
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            role: true,
          },
        });
        return res.status(200).json({ Users: Users });
      }
    }
  } catch (error: unknown) {
    console.error('Error in getUsers:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import { z } from 'zod';

import { careSeekerCreateSchema, professionalCreateSchema, professionalUpdateSchema, roleQuerySchema } from '../../../packages/schemas/src/users.schemas.ts'
import { Prisma, PrismaClient } from '../prisma/generated/index.js';

const prisma: PrismaClient = new PrismaClient();

const selectFields = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  phoneNumber: true,
  role: true,
  createdAt: true,
  updatedAt: true
};

const fullProSelect = {
  isMobile: true,
  interventionRadius: true,
  siret: true,
  isSiretValid: true,
  user: {
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phoneNumber: true,
      role: true,
      createdAt: true,
      updatedAt: true,
      emailVerified: true,
    },
  },
  profession: {
    select: {
      id: true,
      customProfession: true,
      isProfessionApproved: true,
      professionName: true,
    },
  },
}


export async function createCareSeeker(req: Request, res: Response) {
  try {
    const userData = careSeekerCreateSchema.parse(req.body);
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
    const ProfessionalData = professionalCreateSchema.parse(req.body);

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
            siret: ProfessionalData.siret,
            isSiretValid: ProfessionalData.isSiretValid,
            professionId: ProfessionalData.professionId,
          },
        },
      },
      include: {
        professionals: true,
      },
    });

    const newUserResp = {
      "email": newUser.email,
      "lastName": newUser.lastName,
      "firstName": newUser.firstName,
      "phoneNumber": newUser.phoneNumber,
      "role": newUser.role,
      "id": newUser.professionals[0].userId,
      "professionId": newUser.professionals[0].professionId,
      "isMobile": newUser.professionals[0].isMobile,
      "interventionRadius": newUser.professionals[0].interventionRadius,
      "siret": newUser.professionals[0].siret,
      "isSiretValid": newUser.professionals[0].isSiretValid
    };

    return res.status(201).json(newUserResp);
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
    return res.status(200).json({ Users });
  } catch (error: unknown) {
    console.error('Error in getUsers:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function getProfessionalById(req: Request, res: Response) {
  try {
    const parseResult = roleQuerySchema.safeParse(req.query);

    if (!parseResult.success) {
      return res.status(400).json({ error: 'Invalid role filter' });
    }

    if (!req.params.id || typeof req.params.id != 'string') {
      return res.status(400).json({ error: 'Invalid id filter' });
    }
    const id = req.params.id;

    const role = parseResult.data.role;
    if (role !== 'PROFESSIONAL')
      return res.status(400).json({ error: 'Invalid role filter' });

    const professional = await prisma.professional.findFirst({
      where: {
        userId: id
      },
      select: fullProSelect
    });
    console.log('Professional:', professional);

    return res.status(200).json({ professional });
  } catch (error: unknown) {
    console.error('Error in getSpecificUser:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updateProfessional(req: Request, res: Response) {
  try {
    const parsedData = professionalUpdateSchema.safeParse(req.body)
    if (!parsedData.success) {
      console.log('updateProfessional - parsedData.error:', parsedData.error);
      return res.status(400).json({ error: 'Invalid request format' });
    }
    const professionalData = parsedData.data;

    const professional = await prisma.professional.update({
      where: { userId: req.params.id },
      data: {
        isMobile: professionalData.isMobile,
        interventionRadius: professionalData.interventionRadius,
        siret: professionalData.siret || null,
        isSiretValid: professionalData.isSiretValid,
        user: {
            update: {
            email: professionalData.email,
            firstName: professionalData.firstName,
            lastName: professionalData.lastName,
            phoneNumber: professionalData.phoneNumber || null,
            emailVerified: professionalData.emailVerified,
          },
        },
        profession: {
          update: {
            professionName: professionalData.professionName,
            customProfession: professionalData.customProfession,
            isProfessionApproved: professionalData.isProfessionApproved,
          },
        },
      },
    })
    return res.status(201).json({ professional });

  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Data validation error in updateProfessional:', error.issues);
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

export async function getCareSeekerById(req: Request, res: Response) {
  try {
    const parseResult = roleQuerySchema.safeParse(req.query);

    if (!parseResult.success) {
      return res.status(400).json({ error: 'Invalid role filter' });
    }

    if (!req.params.id || typeof req.params.id != 'string') {
      return res.status(400).json({ error: 'Invalid id filter' });
    }
    const id = req.params.id;

    const role = parseResult.data.role;
    if (role !== 'CARESEEKER')
      return res.status(400).json({ error: 'Invalid role filter' });

    const careseeker = await prisma.careSeeker.findFirst({
      where: {
        userId: id
      },
      include: {
        user: true
      },
    });

    return res.status(200).json({ careseeker });
  } catch (error: unknown) {
    console.error('Error in getSpecificUser:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import { z } from 'zod';

import {
  careSeekerCreateSchema,
  careSeekerUpdateSchema,
  professionalCreateSchema,
  professionalUpdateSchema,
  roleQuerySchema,
  professionalResponseSchema
} from '../../../packages/schemas/src/users.schemas.ts';
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

const fullCareSelect = {
  isHelper: true,
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
      }
    });

    const flatNewUser = {
      id: newUser.id,
      email: newUser.email,
      createdAt: newUser.createdAt.toISOString(),
      updatedAt: newUser.updatedAt.toISOString(),
      emailVerified: newUser.emailVerified,
      lastName: newUser.lastName,
      firstName: newUser.firstName,
      phoneNumber: newUser.phoneNumber,
      role: newUser.role,
      isMobile: newUser.professionals[0].isMobile,
      interventionRadius: newUser.professionals[0].interventionRadius,
      siret: newUser.professionals[0].siret,
      isSiretValid: newUser.professionals[0].isSiretValid,
      professionId: newUser.professionals[0].professionId,
    }

    const professional = professionalResponseSchema.safeParse(flatNewUser)
    if (!professional.success) {
      console.error('Z error while creating professional:', professional.error)
      throw new Error;
    }

    return res.status(201).json(professional.data);
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

    return res.status(200).json({ professional });
  } catch (error: unknown) {
    console.error('Error in getSpecificUser:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updateProfessional(req: Request, res: Response) {
  try {
    const parsedData = professionalUpdateSchema.safeParse(req.body)
    if (!parsedData.success)
      return res.status(400).json({ error: 'Invalid request format' });

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
      select: fullProSelect,
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
          return res.status(400).json({ error: 'Email, Phone number and/or SIRET already in use.' });
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
      select: fullCareSelect
    });
    return res.status(200).json({ careseeker });
  } catch (error: unknown) {
    console.error('Error in getSpecificUser:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updateCareseeker(req: Request, res: Response) {
  try {
    const parsedData = careSeekerUpdateSchema.safeParse(req.body)
    if (!parsedData.success) {
      return res.status(400).json({ error: 'Invalid request format' });
    }
    const careSeekerData = parsedData.data;


    const careSeeker = await prisma.careSeeker.update({
      where: { userId: req.params.id },
      data: {
        isHelper: careSeekerData.isHelper,
        user: {
          update: {
            email: careSeekerData.email,
            firstName: careSeekerData.firstName,
            lastName: careSeekerData.lastName,
            phoneNumber: careSeekerData.phoneNumber || null,
            emailVerified: careSeekerData.emailVerified,
          },
        },
      },
      select: fullCareSelect,
    })

    return res.status(201).json({ careSeeker });

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

      console.error('Error in updateCareSeeker:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

import type { Request, Response } from 'express';
import { z } from 'zod';

import {
  professionCreateSchema,
  customProfessionCreateSchema
} from '../../../packages/schemas/src/profession.schemas.ts';
import { 
  Prisma,
  PrismaClient
} from '../prisma/generated/index.js';

const prisma: PrismaClient = new PrismaClient();

export async function adminCreateProfessions(req: Request, res: Response) {
  try {
    const professionData = professionCreateSchema.parse(req.body);

    const newProfession = await prisma.profession.create({
      data: {
        professionName: professionData.professionName,
        customProfession: professionData.customProfession,
        isProfessionApproved: professionData.isProfessionApproved,
      },
      include: {
        professionals: true,
      }
    });

    const newProfessionResp = {
      id: newProfession.id,
      professionName: newProfession.professionName,
      CustomProfession: newProfession.customProfession,
      isProfessionApproved: newProfession.isProfessionApproved,
    };

    return res.status(201).json({ 'Profession added': newProfessionResp });
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

export async function getProfessions(req: Request, res: Response) {
  try {
    const professionsData = await prisma.profession.findMany({
      where: {
        AND: [
          { customProfession: "" },
          { isProfessionApproved: false },
        ]
      },
      orderBy: {
        professionName: 'asc'
      },
    });
    res.status(200).json(professionsData);
  } catch (error: unknown) {
    console.error('Erreur in getProfessions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export async function proCreateProfessions(req: Request, res: Response) {
  try {
    const parsedProfession = customProfessionCreateSchema.parse(req.body);

    const customProfession = parsedProfession.customProfession.trim();
    if (!customProfession || customProfession.length < 2) {
      return res.status(409).json(
        { error: 'Conflict: invalid new profession name' }
      );
    };

    const existingProfessionApproved = await prisma.profession.findFirst({
      where: {
        professionName: customProfession
      }
    })
    if (existingProfessionApproved) {
      return res.status(409).json(
        { error: 'Conflict: a profession with this name already exists' }
      );
    }

    const newProfession = await prisma.profession.create({
      data: {
        professionName: 'Autre',
        customProfession,
        isProfessionApproved: false,
      },
    });

    return res.status(201).json(newProfession)
  } catch (error) {
    console.error('Error while calling createProfession:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

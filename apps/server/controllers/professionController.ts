import type { Request, Response } from 'express';
import { z } from 'zod';

import {
  customProfessionCreateSchema,
  professionCreateSchema,
  professionUpdateResponseSchema,
  professionUpdateSchema,
} from '../../../packages/schemas/src/profession.schemas.ts';
import {
  Prisma,
  PrismaClient
} from '../prisma/generated/index.js';
import { handleError } from './handleError.ts';

const fullProfessionSelect = {
  id: true,
  professionName: true,
  customProfession: true,
  isProfessionApproved: true,
  createdAt: true,
  updatedAt: true,
  professionals: {
    select: {
      userId: true,
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    }
  }
};

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

    const profession = {
      id: newProfession.id,
      professionName: newProfession.professionName,
      CustomProfession: newProfession.customProfession,
      isProfessionApproved: newProfession.isProfessionApproved,
    };

    return res.status(201).json({ profession });
  } catch (error: unknown) {
    return handleError(error, res, 'adminCreateProfessions');
  }
}

export async function getProfessions(req: Request, res: Response) {
  try {
    const professionsData = await prisma.profession.findMany({
      orderBy: {
        professionName: 'asc'
      }
    })
    res.status(200).json(professionsData);
  } catch (error: unknown) {
    return handleError(error, res, 'getProfessions');
  }
};

export async function getApprovedProfessions(req: Request, res: Response) {
  try {
    const professionsData = await prisma.profession.findMany({
      where: {
        AND: [
          { isProfessionApproved: true },
        ]
      },
      orderBy: {
        professionName: 'asc'
      },
    });
    res.status(200).json(professionsData);
  } catch (error: unknown) {
    return handleError(error, res, 'getApprovedProfessions');
  }
};

export async function proCreateProfessions(req: Request, res: Response) {
  try {
    const parsedProfession = customProfessionCreateSchema.parse(req.body);

    const customProfession = parsedProfession.customProfession.trim();
    if (!customProfession || customProfession.length < 2) {
      throw new Error('Invalid new profession name')
    };

    const existingProfessionApproved = await prisma.profession.findFirst({
      where: {
        professionName: customProfession
      }
    })
    if (existingProfessionApproved) {
      throw new Error('A profession with this name already exists')
    }

    const newProfession = await prisma.profession.create({
      data: {
        professionName: 'Autre',
        customProfession,
        isProfessionApproved: false,
      },
    });

    return res.status(201).json(newProfession)
  } catch (error: unknown) {
    return handleError(error, res, 'proCreateProfessions');
  }
};


export async function getProfessionsById(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string') {
      throw new Error('Not found');
    }
    const id = req.params.id;

    const professionData = await prisma.profession.findFirst({
      where: { id },
      select: fullProfessionSelect,
    });

    res.status(200).json(professionData);
  } catch (error: unknown) {
    return handleError(error, res, 'getProfessionsById');
  }
};

export async function updateProfessions(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string') {
      throw new Error('Not found');
    }

    const parsedData = professionUpdateSchema.safeParse(req.body)
    if (!parsedData.success) {
      throw new Error('Invalid request format');
    }
    const professionData = parsedData.data;

    const profession = await prisma.profession.update({
      where: { id: req.params.id },
      data: {
        professionName: professionData.professionName,
        customProfession: professionData.customProfession,
        isProfessionApproved: professionData.isProfessionApproved
      }
    })

    const parsedProfession = professionUpdateResponseSchema.safeParse(profession);
    if (!parsedProfession.success) {
      throw new Error("Validation failed on updated profession");
    }
    return res.status(201).json({ profession });
  } catch (error: unknown) {
    return handleError(error, res, 'updateProfessions');
  }
}

export async function deleteProfessions(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string') {
      throw new Error('Not found');
    }

    const naProfession = await prisma.profession.findFirst({
      where: {
        professionName: 'N/A',
        AND: { customProfession: 'N/A' },
      }
    })
    const naProfessionId = naProfession?.id
    if (!naProfession || !naProfessionId) {
      throw new Error('Fallback profession not found');
    }

    await prisma.professional.updateMany({
      where: { professionId: req.params.id },
      data: { professionId: naProfessionId }
    })

    const profession = await prisma.profession.delete({
      where: { id: req.params.id },
    })

    return res.status(200).json(profession);
  } catch (error: unknown) {
    return handleError(error, res, 'deleteProfessions');
  }
}

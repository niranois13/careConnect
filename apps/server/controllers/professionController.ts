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
    if (error instanceof z.ZodError) {
      console.error('Error in adminCreateProfessions:', error.issues);
      return res.status(400).json({ error: error.issues });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(400).json({ error: 'Profession already exists.' });
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
      orderBy: {
        professionName: 'asc'
      }
    })
    res.status(200).json(professionsData);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Error in createCareSeeker:', error.issues);
      return res.status(400).json({ error: error.issues });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(400).json({ error: 'Profession already exists.' });
        case 'P2003':
          return res.status(400).json({ error: 'Invalid foreign key reference.' });
        case 'P2000':
          return res.status(400).json({ error: 'Input too long for a field.' });
        case 'P2025':
          return res.status(404).json({ error: 'Resource not found.' });
      }

      console.error('Error getProfessions:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
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
    if (error instanceof z.ZodError) {
      console.error('Error in getApprovedProfessions:', error.issues);
      return res.status(400).json({ error: error.issues });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(400).json({ error: 'Profession already exists.' });
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
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Error in createCareSeeker:', error.issues);
      return res.status(400).json({ error: error.issues });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(400).json({ error: 'Profession already exists.' });
        case 'P2003':
          return res.status(400).json({ error: 'Invalid foreign key reference.' });
        case 'P2000':
          return res.status(400).json({ error: 'Input too long for a field.' });
        case 'P2025':
          return res.status(404).json({ error: 'Resource not found.' });
      }

      console.error('Error in proCreateProfessions:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};


export async function getProfessionsById(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string') {
      return res.status(404).json({ error: 'Not Found' });
    }
    const id = req.params.id;

    const professionData = await prisma.profession.findFirst({
      where: { id },
      select: fullProfessionSelect,
    });

    res.status(200).json(professionData);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Error in createCareSeeker:', error.issues);
      return res.status(400).json({ error: error.issues });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(400).json({ error: 'Profession already exists.' });
        case 'P2003':
          return res.status(400).json({ error: 'Invalid foreign key reference.' });
        case 'P2000':
          return res.status(400).json({ error: 'Input too long for a field.' });
        case 'P2025':
          return res.status(404).json({ error: 'Resource not found.' });
      }

      console.error('Error in getProfessionsById:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export async function updateProfessions(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string') {
      return res.status(404).json({ error: 'Not Found' });
    }

    const parsedData = professionUpdateSchema.safeParse(req.body)
    if (!parsedData.success) {
      return res.status(400).json({ error: 'Invalid request format' });
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
      console.error("Zod validation failed:", parsedProfession.error);
      return res.status(500).json({ error: "Validation failed on updated profession" });
    }
    return res.status(201).json({ profession });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Error in createCareSeeker:', error.issues);
      return res.status(400).json({ error: error.issues });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(400).json({ error: 'Profession already exists.' });
        case 'P2003':
          return res.status(400).json({ error: 'Invalid foreign key reference.' });
        case 'P2000':
          return res.status(400).json({ error: 'Input too long for a field.' });
        case 'P2025':
          return res.status(404).json({ error: 'Resource not found.' });
      }

      console.error('Error in updateProfessions:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export async function deleteProfessions(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string') {
      return res.status(404).json({ error: 'Not Found' });
    }

    const naProfession = await prisma.profession.findFirst({
      where: { professionName: 'N/A',
      AND: { customProfession: 'N/A' },
      }
    })
    const naProfessionId = naProfession?.id
    if (!naProfession || !naProfessionId) {
      return res.status(400).json({ error: 'Invalid request format' });
    }

    await prisma.professional.updateMany({
      where: { professionId: req.params.id },
      data: { professionId: naProfessionId }
    })

    const profession = await prisma.profession.delete({
      where: { id: req.params.id },
    })

    return res.status(200).json({
      message: 'Profession deleted successfully, users reassigned to N/A',
      profession
    });
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(400).json({ error: 'Profession already exists.' });
        case 'P2003':
          return res.status(400).json({ error: 'Invalid foreign key reference.' });
        case 'P2000':
          return res.status(400).json({ error: 'Input too long for a field.' });
        case 'P2025':
          return res.status(404).json({ error: 'Resource not found.' });
      }

      console.error('Error in deleteProfessions:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

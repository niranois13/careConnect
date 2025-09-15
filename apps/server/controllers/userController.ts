import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';

import {
  careSeekerCreateSchema,
  careSeekerUpdateSchema,
  professionalCreateSchema,
  professionalResponseSchema,
  professionalUpdateSchema,
  roleQuerySchema
} from '../../../packages/schemas/src/users.schemas.ts';
import { PrismaClient } from '../prisma/generated/index.js';
import { handleError } from './handleError.ts';


const prisma: PrismaClient = new PrismaClient();

const selectFields = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  phoneNumber: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  address: {
    select: {
      id: true,
      userId: true,
      label: true,
      city: true,
      street: true,
      postalCode: true,
      createdAt: true,
      updatedAt: true,
      latitude: true,
      longitude: true,
    }
  }
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
      address: true
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
      address: {
        select: {
          id: true,
          userId: true,
          label: true,
          street: true,
          postalCode: true,
          city: true,
          createdAt: true,
          updatedAt: true,
        }
      }
    },
  }
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
        address: {
          create: {
            city: userData.address[0].city,
            street: userData.address[0].street,
            postalCode: userData.address[0].postalCode,
            label: userData.address[0].label
          }
        },
        careSeekers: {
          create: {
            isHelper: userData.isHelper,
          },
        },
      },
      include: {
        careSeekers: true,
        address: true,
      },
    });
    return res.status(201).json(newUser);
  } catch (error: unknown) {
    return handleError(error, res, 'createCareSeeker');
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
        address: {
          create: ProfessionalData.address.map(addr => ({
            street: addr.street,
            postalCode: addr.postalCode,
            city: addr.city,
            label: addr.label,
          })),
        },
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
        address: true,
      }
    });
    console.log('New user Address:', newUser.address);

    const flattenedProfessional = {
      id: newUser.id,
      email: newUser.email,
      createdAt: newUser.createdAt.toISOString(),
      updatedAt: newUser.updatedAt.toISOString(),
      emailVerified: newUser.emailVerified,
      lastName: newUser.lastName,
      firstName: newUser.firstName,
      phoneNumber: newUser.phoneNumber,
      role: newUser.role,
      isMobile: newUser.professionals[0]?.isMobile ?? false,
      interventionRadius: newUser.professionals[0]?.interventionRadius ?? 0,
      siret: newUser.professionals[0]?.siret ?? null,
      isSiretValid: newUser.professionals[0]?.isSiretValid ?? false,
      professionId: newUser.professionals[0]?.professionId ?? undefined,
      address: newUser.address.map(addr => ({
        id: addr.id,
        userId: addr.userId,
        createdAt: addr.createdAt.toISOString(),
        updatedAt: addr.updatedAt.toISOString(),
        latitude: addr.latitude ?? null,
        longitude: addr.longitude ?? null,
        street: addr.street ?? null,
        postalCode: addr.postalCode ?? null,
        city: addr.city,
        label: addr.label,
      })),
    };

    const professional = professionalResponseSchema.safeParse(flattenedProfessional)
    if (!professional.success) {
      console.log('Professional Error:', professional.error.issues);
      throw new Error('Validation error while creating professional');
    }

    return res.status(201).json(professional.data);
  } catch (error: unknown) {
    return handleError(error, res, 'createProfessional');
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const parseResult = roleQuerySchema.safeParse(req.query);

    if (!parseResult.success) {
      throw new Error('Invalid role filter')
    }

    const role = parseResult.data.role;

    const Users = await prisma.user.findMany({
      where: {
        role: role,
      },
      select: selectFields,
    });
    return res.status(200).json(Users);
  } catch (error: unknown) {
    return handleError(error, res, 'getUsers');
  }
}

export async function getProfessionalById(req: Request, res: Response) {
  try {
    const parseResult = roleQuerySchema.safeParse(req.query);

    if (!parseResult.success) {
      throw new Error('Invalid role filter')
    }

    if (!req.params.id || typeof req.params.id != 'string') {
      throw new Error('Not found')
    }
    const id = req.params.id;

    const role = parseResult.data.role;
    if (role !== 'PROFESSIONAL') {
      throw new Error('Invalid role filter')
    }

    const professional = await prisma.professional.findFirst({
      where: {
        userId: id
      },
      select: fullProSelect
    });

    return res.status(200).json(professional);
  } catch (error: unknown) {
    return handleError(error, res, 'getProfessionalById');
  }
}

export async function updateProfessional(req: Request, res: Response) {
  try {
    const parsedData = professionalUpdateSchema.safeParse(req.body)
    if (!parsedData.success) {
      throw new Error('Invalid request format')
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
      select: fullProSelect,
    })
    return res.status(201).json(professional);

  } catch (error: unknown) {
    return handleError(error, res, 'updateProfessional');
  }
}

export async function getCareSeekerById(req: Request, res: Response) {
  try {
    const parseResult = roleQuerySchema.safeParse(req.query);

    if (!parseResult.success) {
      throw new Error('Invalid role filter')
    }

    if (!req.params.id || typeof req.params.id != 'string') {
      throw new Error('Not found')
    }
    const id = req.params.id;

    const role = parseResult.data.role;
    if (role !== 'CARESEEKER') {
      throw new Error('Invalid role filter')
    }

    const careseeker = await prisma.careSeeker.findFirst({
      where: {
        userId: id
      },
      select: fullCareSelect
    });
    return res.status(200).json(careseeker);
  } catch (error: unknown) {
    return handleError(error, res, 'getCareSeekerById');
  }
}

export async function updateCareseeker(req: Request, res: Response) {
  try {
    const parsedData = careSeekerUpdateSchema.safeParse(req.body)
    if (!parsedData.success) {
      throw new Error('Invalid request format')
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
            address: {
              upsert: careSeekerData.address.map((addr) => ({
                where: { id: addr.id },
                update: {
                  street: addr.street,
                  postalCode: addr.postalCode,
                  city: addr.city,
                  label: addr.label,
                },
                create: {
                  street: addr.street,
                  postalCode: addr.postalCode,
                  city: addr.city,
                  label: addr.label
                }
              }))
            }
          },
        }
      },
      select: fullCareSelect,
    })

    return res.status(201).json(careSeeker);

  } catch (error: unknown) {
    return handleError(error, res, 'updateCareSeeker');
  }
}

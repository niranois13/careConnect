import { Request, Response } from "express";
import { PrismaClient } from '../prisma/generated/index.js';
import { handleError } from "./handleError.ts";
import { professionalResponseSchema } from "packages/schemas/src/users.schemas.ts";

const prisma: PrismaClient = new PrismaClient();

export async function searchUsers(req: Request, res: Response) {
  try {
    const { term } = req.query;
    if (!term || typeof term != "string") {
      throw new Error('Search term is required');
    }

    const professionalsByProfession = await prisma.professional.findMany({
      where: {
        profession: {
          professionName: {
            contains: term,
            mode: "insensitive"
          }
        }
      },
      include: {
        user: true,
        profession: true,
      }
    });

    const parsedProfessionalsByProfession = professionalResponseSchema.safeParse(professionalsByProfession)
    if (!parsedProfessionalsByProfession.success) {
      throw new Error("Zod validation error while parsing professional by profession")
    }

    const professionalsByName = await prisma.professional.findMany({
      where: {
        user: {
          lastName: {
            contains: term,
            mode: "insensitive"
          },
          role: {
            in: ["PROFESSIONAL"]
          }
        }
      },
      include: {
        user: true,
        profession: true
      }
    })

    const parsedProfessionalsByName = professionalResponseSchema.safeParse(professionalsByName)
    if (!parsedProfessionalsByName.success) {
      throw new Error("Zod validation error whule parsing professional by name");
    }

    return res.status(200).json({
      parsedProfessionalsByName,
      parsedProfessionalsByProfession
    });

  } catch (error: unknown) {
    return handleError(error, res, 'searchUsers');
  }
}

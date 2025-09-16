import type { Request, Response } from "express";
import { z } from 'zod';

import { professionalSearchResultSchema } from "../../../packages/schemas/src/users.schemas.ts";
import type { Professional, User } from '../prisma/generated/index.js';
import { PrismaClient } from '../prisma/generated/index.js';
import { handleError } from "./handleError.ts";

const prisma: PrismaClient = new PrismaClient();

export async function searchUsers(req: Request, res: Response) {
  try {
    const { term } = req.query;
    if (!term || typeof term != "string") {
      throw new Error('A search term is required');
    }
    console.log('Search Term:', term);

    const professionMatches = await prisma.professional.findMany({
      where: {
        profession: {
          professionName: {
            contains: term,
            mode: "insensitive"
          }
        }
      },
      include: {
        user: {
          include: {
            address: true
          }
        },
        profession: true,
      }
    });

    console.log('Professionals by profession found:', professionMatches);

    const nameMatches = await prisma.professional.findMany({
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
        user: {
          include: {
            address: true,
          }
        },
        profession: true
      }
    })

    console.log('Professionals by name found:', nameMatches);

    type ProfessionalWithRelations = Professional & {
      user: User & { address: { city: string }[] };
      profession: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customProfession: string | null;
        isProfessionApproved: boolean;
        professionName: string;
      } | null;
    };

    const flattenProfessional = (pro: ProfessionalWithRelations) => {
      const city = pro.user.address[0].city;
      return {
        id: pro.user.id,
        firstName: pro.user.firstName,
        lastName: pro.user.lastName,
        role: pro.user.role,
        professionName: pro.profession?.professionName,
        customProfession: pro.profession?.customProfession,
        city,
        isMobile: pro.isMobile,
        interventionRadius: pro.interventionRadius,
      };
    };

    const allResults = [
      ...professionMatches.map(flattenProfessional),
      ...nameMatches.map(flattenProfessional),
    ]

    const uniqueResultsMap = new Map<string, typeof allResults[0]>();
    allResults.forEach(r => uniqueResultsMap.set(r.id, r));
    const uniqueResults = Array.from(uniqueResultsMap.values());

    const parsed = z.array(professionalSearchResultSchema).safeParse(uniqueResults);
    if (!parsed.success) {
      console.error('Zod validation issues:', parsed.error.issues);
      throw new Error('Validation error while parsing search results');
    }

    return res.status(200).json(parsed.data);

  } catch (error: unknown) {
    return handleError(error, res, 'searchUsers');
  }
}

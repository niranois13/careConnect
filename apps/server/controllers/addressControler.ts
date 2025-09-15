import type { Request, Response } from 'express';

import { addressUserSchema, baseAddressSchema } from '../../../packages/schemas/src/addresses.schemas.ts';
import { PrismaClient } from '../prisma/generated/index.js';
import { handleError } from './handleError.ts';

const prisma: PrismaClient = new PrismaClient();

export async function adminGetAddresses(req: Request, res: Response) {
  try {
    const addresses = await prisma.address.findMany();

    res.status(200).json(addresses);
  } catch (error: unknown) {
    return handleError(error, res, 'adminGetAdresses');
  }
}

export async function adminGetAddressesById(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string')
      throw new Error('Not found')

    const address = await prisma.address.findUnique({
      where: { id: req.params.id },
    })

    const parsedAddress = addressUserSchema.safeParse(address);
    if (!parsedAddress.success)
      throw new Error('Data validation error while fetching an address');

    res.status(200).json(parsedAddress.data);
  } catch (error: unknown) {
    return handleError(error, res, 'adminGetAddressesById');
  }
}

export async function getAddressesById(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string')
      throw new Error('Not found')

    const address = await prisma.address.findUnique({
      where: { id: req.params.id },
    })

    const parsedAddress = baseAddressSchema.safeParse(address);
    if (!parsedAddress.success)
      throw new Error('Data validation error while fetching an address');

    res.status(200).json(parsedAddress.data);
  } catch (error: unknown) {
    return handleError(error, res, 'getAddressesById');
  }
}

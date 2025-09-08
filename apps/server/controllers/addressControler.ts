import type { Request, Response } from 'express';

import { addressCreateSchema, addressResponseSchema, addressUpdateSchema, adminAddressResponseSchema, adminAddressUpdateSchema } from '../../../packages/schemas/src/addresses.schemas.ts';
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

    const parsedAddress = addressResponseSchema.safeParse(address);
    if (!parsedAddress.success)
      throw new Error('Data validation error while fetching an address');

    res.status(200).json(parsedAddress.data);
  } catch (error: unknown) {
    return handleError(error, res, 'adminGetAddressesById');
  }
}

export async function adminCreateAddresses(req: Request, res: Response) {
  try {
    const address = addressCreateSchema.safeParse(req.body);
    if (!address.success)
      throw new Error('Invalid request format')

    const newAddress = await prisma.address.create(
      { data: address.data }
    )

    const parsedAddress = adminAddressResponseSchema.safeParse(newAddress)
    if (!parsedAddress.success)
      throw new Error('Data validation error while admin creates address');

    res.status(201).json(parsedAddress.data)
  } catch (error: unknown) {
    return handleError(error, res, 'adminCreateAddresses');
  }
}

export async function adminUpdateAddressesById(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string')
      throw new Error('Not found')

    const address = adminAddressUpdateSchema.safeParse(req.body);
    if (!address.success)
      throw new Error('Invalid request format')
    const addressData = address.data
    const newAddress = await prisma.address.update({
      where: { id: addressData.id },
      data: {
        userId: addressData.userId,
        label: addressData.label,
        street: addressData.street,
        postalCode: addressData.postalCode,
        city: addressData.city,
        longitude: addressData.longitude,
        latitude: addressData.latitude,
      }
    })

    const parsedAddress = adminAddressResponseSchema.safeParse(newAddress);
    if (!parsedAddress.success)
      throw new Error('Data validation error while fetching an address');

    res.status(201).json(parsedAddress.data);
  } catch (error: unknown) {
    return handleError(error, res, 'adminUpdateAddressesById')
  }
}

export async function getAddressesById(req: Request, res: Response) {
  try {
    if (!req.params.id || typeof req.params.id != 'string')
      throw new Error('Not found')

    const address = await prisma.address.findUnique({
      where: { id: req.params.id },
      select: {
        street: true,
        postalCode: true,
        city: true,
        userId: true,
        createdAt: true,
        updatedAt: true
      }
    })

    const parsedAddress = addressResponseSchema.safeParse(address);
    if (!parsedAddress.success)
      throw new Error('Data validation error while fetching an address');

    res.status(200).json(parsedAddress.data);
  } catch (error: unknown) {
    return handleError(error, res, 'getAddressesById');
  }
}

export async function createAddresses(req: Request, res: Response) {
  try {
    const address = addressCreateSchema.safeParse(req.body)
    if (!address.success)
      throw new Error('Invalid request format');

    const newAddress = await prisma.address.create({
      data: {
        street: address.data.street,
        postalCode: address.data.postalCode,
        city: address.data.city,
        label: address.data.label,
        userId: address.data.userId
      }
    })

    const newAddressResponse = {
      id: newAddress.id,
      label: newAddress.label,
      street: newAddress.street,
      postalCode: newAddress.postalCode,
      city: newAddress.city,
      userId: newAddress.userId,
      createdAt: newAddress.createdAt,
      updatedAt: newAddress.updatedAt
    }

    const parsedAddress = addressResponseSchema.safeParse(newAddressResponse)
    if (!parsedAddress.success)
      throw new Error('Data validation error while creating an address')

    res.status(201).json(parsedAddress.data)
  } catch (error: unknown) {
    return handleError(error, res, 'createAddresses');
  }
}

export async function updateAdresses(req: Request, res: Response) {
  try {
    if (req.params.id || typeof req.params.id != 'string')
      throw new Error('Not found');

    const address = addressUpdateSchema.safeParse(req.body)
    if (!address.success)
      throw new Error('Invalid request format');

    const addressData = address.data

    const newAddress = await prisma.address.update({
      where: { id: req.params.id },
      data: {
        userId: addressData.userId,
        label: addressData.label,
        street: addressData.street,
        postalCode: addressData.postalCode,
        city: addressData.city,
      }
    })

    const parsedData = addressResponseSchema.safeParse(newAddress)
    if (!parsedData.success)
      throw new Error('Data validation error while updating an address')
  } catch (error: unknown) {
    return handleError(error, res, 'updateAddresses');
  }
}

export async function deleteAddressesById(req: Request, res: Response) {
  try {
    if (req.params.id || typeof req.params.id != 'string')
      throw new Error('Not found');

    const deletedAddress = await prisma.address.delete({
      where: { id: req.params.id }
    })

    const parsedData = adminAddressResponseSchema.safeParse(deletedAddress);
    if (!parsedData.success)
      throw new Error('Data validation error while deleting a profession')

    res.status(200).json(parsedData);
  } catch (error: unknown) {
    return handleError(error, res, 'deleteAddressesById');
  }
}

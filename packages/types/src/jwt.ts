// import { Role } from '../../../apps/server/prisma/generated/prisma-users/index.js';

export const UserRole = {
  ADMIN: "ADMIN",
  CARESEEKER: "CARESEEKER",
  PROFESSIONAL: "PROFESSIONAL",
  GUEST: "GUEST",
}

export type UserRole = typeof UserRole[keyof typeof UserRole];

export type jwtPayload = {
  id: string;
  email: string;
  role: UserRole;
};

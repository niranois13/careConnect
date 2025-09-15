import type { Express, Request, Response } from 'express';

import {
  adminGetAddresses,
  adminGetAddressesById,
  getAddressesById,
} from '../controllers/addressControler.ts';
import { adminDeleteUserById, createAdmin } from '../controllers/adminController.ts';
import { loginUser, logout } from '../controllers/authController.ts';
import { getHealth } from '../controllers/healthController.ts';
import {
  adminCreateProfessions,
  deleteProfessions,
  getApprovedProfessions,
  getProfessions,
  getProfessionsById,
  proCreateProfessions,
  updateProfessions,
} from '../controllers/professionController.ts';
import { searchUsers } from '../controllers/searchController.ts';
import {
  createCareSeeker,
  createProfessional,
  getCareSeekerById,
  getProfessionalById,
  getUsers,
  updateCareseeker,
  updateProfessional
} from '../controllers/userController.ts';
import { requireAuth } from '../middlewares/requireAuth.ts';
import { requireRole } from '../middlewares/requireRole.ts';
import { requireSelf } from '../middlewares/requireSelf.ts';

const asyncHandler = (fn: (req: Request, res: Response) => Promise<unknown>) =>
  (req: Request, res: Response) => {
    fn(req, res).catch((error: unknown) => {
      console.error("Unhandled error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
  };

export default function registerRoutes(app: Express) {
  /* UTILS */
  app.get('/api/health', requireRole('ADMIN'), getHealth);
  app.get('/search', asyncHandler(searchUsers));

  /* AUTH */
  app.post('/api/login', asyncHandler(loginUser));

  app.post('/api/logout', (req: Request, res: Response) => {
    try {
      logout(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to logout:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/me', requireAuth, (req: Request, res: Response) => {
    res.json(req.user);
  });

  /* PROFESSIONS */
  app.get('/api/professions', asyncHandler(getProfessions));
  app.get('/api/professions/approved', asyncHandler(getApprovedProfessions));
  app.post('/api/professions', asyncHandler(proCreateProfessions));
  app.get('/api/professions/:id', requireRole('PROFESSIONAL'), asyncHandler(getProfessionsById));
  app.put('/api/professions/:id', requireRole('PROFESSIONAL'), asyncHandler(updateProfessions));

  /* ADDRESS */
  app.get('/api/address/:id', requireSelf(), asyncHandler(getAddressesById));
  app.delete('/api/address/:id', requireSelf(), asyncHandler(deleteProfessions));

  /* USERS */
  /* CARESEEKER */
  app.post('/api/careseeker', asyncHandler(createCareSeeker));
  app.get('/api/careseeker/:id', requireSelf(), asyncHandler(getCareSeekerById));

  /* PROFESSIONAL */
  app.post('/api/professional', asyncHandler(createProfessional));
  app.put('/api/professional/:id', requireSelf(), asyncHandler(updateProfessional))

  /* ADMIN */
  app.post('/api/admin', asyncHandler(createAdmin));

  /* ADMIN USERS */
  app.get('/api/admin/users', requireRole('ADMIN'), asyncHandler(getUsers));
  app.delete('/api/admin/users/:id', requireRole('ADMIN'), asyncHandler(adminDeleteUserById));

  /* ADMIN CARESEEKER */
  app.get('/api/admin/careseeker/:id', requireRole('ADMIN'), asyncHandler(getCareSeekerById));
  app.put('/api/admin/careseeker/:id', requireRole('ADMIN'), asyncHandler(updateCareseeker));

  /* ADMIN PROFESSIONAL */
  app.get('/api/admin/professional/:id', requireRole('ADMIN'), asyncHandler(getProfessionalById));
  app.put('/api/admin/professional/:id', requireRole('ADMIN'), asyncHandler(updateProfessional));

  /* ADMIN PROFESSIONS */
  app.post('/api/admin/professions', requireRole('ADMIN'), asyncHandler(adminCreateProfessions));
  app.put('/api/admin/professions/:id', requireRole('ADMIN'), asyncHandler(updateProfessions));
  app.get('/api/admin/professions/:id', requireRole('ADMIN'), asyncHandler(getProfessionsById));
  app.delete('/api/admin/professions/:id', requireRole('ADMIN'), asyncHandler(deleteProfessions));

  /* ADMIN ADDRESS */
  app.get('/api/admin/address', requireRole('ADMIN'), asyncHandler(adminGetAddresses));
  app.get('/api/admin/address/:id', requireRole('ADMIN'), asyncHandler(adminGetAddressesById));
}

import type { Express, Request, Response } from 'express';

import { createAdmin } from '../controllers/adminController.ts';
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

  /* PROFESSIONS */
  app.get('/api/professions', asyncHandler(getProfessions));
  app.get('/api/professions/approved', asyncHandler(getApprovedProfessions));
  app.post('/api/professions', requireRole('PROFESSIONAL', 'ADMIN'), asyncHandler(proCreateProfessions));
  app.get('/api/professions/:id', requireRole('PROFESSIONAL'), asyncHandler(getProfessionsById));
  app.put('/api/professions/:id', requireRole('PROFESSIONAL'), asyncHandler(updateProfessions));

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

  /* USERS */
  /* CARESEEKER */
  app.post('/api/careseeker', asyncHandler(createCareSeeker));

  /* PROFESSIONAL */
  app.post('/api/professional', asyncHandler(createProfessional));

  app.put('/api/professional/:id', requireSelf(), asyncHandler(updateProfessional))

  /* ADMIN */
  app.post('/api/admin', asyncHandler(createAdmin));

  /* ADMIN USERS */
  app.get('/api/admin/users', requireRole('ADMIN'), asyncHandler(getUsers));

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


// GET /api/admin/users/:id → Détails utilisateur

// PUT /api/admin/users/:id → Modifier utilisateur (nom, email, isActive, role…)

// DELETE /api/admin/users/:id → Supprimer un utilisateur

// POST /api/admin/users → Créer un utilisteur
}

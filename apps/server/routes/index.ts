import type { Express, Request, Response } from 'express';

import { createAdmin } from '../controllers/adminController.ts';
import { loginUser, logout } from '../controllers/authController.ts';
import { getHealth } from '../controllers/healthController.ts';
import { adminCreateProfessions, proCreateProfessions, getProfessions } from '../controllers/professionController.ts';
import { createCareSeeker, createProfessional, getUsers } from '../controllers/userController.ts';
import { authenticate } from '../middlewares/authMiddleware.ts';

export default function registerRoutes(app: Express) {
  app.get('/api', (req: Request, res: Response) => {
    res.send('/ called successfully');
  });

  /* UTILS */
  app.get('/api/health', getHealth);

  /* PROFESSIONS */
  app.get('/api/professions', async (req: Request, res: Response) => {
    try {
      await getProfessions(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to getProfessions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/professions', async (req: Request, res: Response) => {
    try {
      await proCreateProfessions(req, res);
    } catch (error: unknown) {
      console.error('Erreur processing the request to proCreateProfessions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/admin/professions', async (req: Request, res: Response) => {
    try {
      await adminCreateProfessions(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to adminCreateProfessions', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // app.put('/api/admin/professions', async (req: Request, res: Response) => {
  //   try {
  //     await adminPutProfessions(req, res);
  //   } catch (error: unknown) {
  //     console.error('Error while processing the request to adminPutProfessions', error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // })

  /* AUTH */
  app.post('/api/login', async (req: Request, res: Response) => {
    try {
      await loginUser(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to userLogin:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/logout', (req: Request, res: Response) => {
    try {
      logout(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to logout:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/me', authenticate, (req: Request, res: Response) => {
    res.json(req.user);
  });

  /* USERS */
  app.post('/api/careseeker', async (req: Request, res: Response) => {
    try {
      await createCareSeeker(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to createCareSeeker:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/professional', async (req: Request, res: Response) => {
    try {
      await createProfessional(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to createProfessional:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/users', async (req: Request, res: Response) => {
    try {
      await getUsers(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to getUsers:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  /* ADMIN */
  app.post('/api/admin', async (req: Request, res: Response) => {
    try {
      await createAdmin(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to createAdmin:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}

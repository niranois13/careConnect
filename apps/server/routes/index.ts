import type { Express, Request, Response } from 'express';

import { createAdmin } from '../controllers/adminController.ts'
import { loginUser, logout } from '../controllers/authController.ts';
import { getHealth } from '../controllers/healthController.ts';
import { createCareSeeker, createProfessional, getUsers } from '../controllers/userController.ts';

export default function registerRoutes(app: Express) {
  app.get('/', (req: Request, res: Response) => {
    res.send('/ called successfully');
  });

  /* UTILS */
  app.get('/health', getHealth);

  /* AUTH */
  app.post('/login', async (req: Request, res: Response) => {
    try {
      await loginUser(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to userLogin:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/logout', (req: Request, res: Response) => {
    try {
      logout(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to logout:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  /* USERS */
  app.post('/careseeker', async (req: Request, res: Response) => {
    try {
      await createCareSeeker(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to createCareSeeker:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/professional', async (req: Request, res: Response) => {
    try {
      await createProfessional(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to createProfessional:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/users', async (req: Request, res: Response) => {
    try {
      await getUsers(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to getUsers:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  /* ADMIN */
  app.post('/admin', async (req: Request, res: Response) => {
    try {
      await createAdmin(req, res);
    } catch (error: unknown) {
      console.error('Error processing the request to createAdmin:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
}

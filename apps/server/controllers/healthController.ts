import type { Request, Response } from 'express';
import pkg from 'pg';

import { env } from '../../../env.ts';

const { Client } = pkg;


export async function getHealth(req: Request, res: Response) {
  const DB_NAME: string = env.DB_NAME;
  const DB_USER: string = env.DB_USER;
  const DB_HOST: string = env.DB_HOST;
  const DB_PORT: number = Number(env.DB_PORT) || 5432;
  const DB_PASSWORD: string = env.DB_PASSWORD;

  const db = new Client({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
  });

  type HealthCheckRow = {
    now: Date;
  };

  try {
    await db.connect();
    const result = await db.query<HealthCheckRow>('SELECT NOW()');
    res.status(200).json({ status: 'ok', db: result.rows[0] });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ status: 'error', message: err.message });
  } finally {
    await db.end();
  }
}

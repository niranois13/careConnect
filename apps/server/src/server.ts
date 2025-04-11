import type { Request, Response } from 'express';
import express from 'express';
import pkg from 'pg';

import { env } from '../../../env.ts';

const { Client } = pkg;

const app = express();
const port: number = env.SERVER_PORT;

const DB_NAME: string = env.DB_NAME;
const DB_USER: string = env.DB_USER;
const DB_HOST: string = env.DB_HOST;
const DB_PORT: number = Number(env.DB_PORT) || 5432;
const DB_PASSWORD: string = env.DB_PASSWORD;

async function connectToDB() {
  const db_client = new Client({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
  });

  try {
    await db_client.connect();
    console.log(`Connected to database: ${DB_NAME} on ${DB_HOST}:${String(DB_PORT)}`);

    const res = await db_client.query('SELECT NOW()');
    console.log('Database time:', res.rows[0]);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await db_client.end();
  }
}

await connectToDB();

app.get('/', (req: Request, res: Response) => {
  console.log('Hello, world!');
  res.send('careConnect!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${String(port)}`);
});

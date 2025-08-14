import dotenv from 'dotenv';

dotenv.config();

function getEnvVar(key: string, required = true): string {
  const value = process.env[key];
  if ((required && value === undefined) || value === '') {
    throw new Error('Missing required environment variable.');
  }
  return String(value);
}

export const env = {
  NODE_ENV: getEnvVar('NODE_ENV', false),
  SERVER_PORT: Number(getEnvVar('PORT', false)) || 3000,
  DB_NAME: getEnvVar('DB_NAME'),
  DB_USER: getEnvVar('DB_USER'),
  DB_HOST: getEnvVar('DB_HOST'),
  DB_PASSWORD: getEnvVar('DB_PASSWORD'),
  DB_PORT: getEnvVar('DB_PORT'),
  DB_URL: getEnvVar('DB_URL'),
  JWT_SECRET: getEnvVar('JWT_SECRET'),
  JWT_EXP: Number(getEnvVar('JWT_EXP')),
  ADMIN_KEY: getEnvVar('ADMIN_KEY'),
};

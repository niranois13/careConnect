import type { jwtPayload } from '../jwt';

declare module 'express' {
  interface Request {
    user?: jwtPayload;
    cookies?: {
      [key: string]: string | undefined;
    };
  }
}

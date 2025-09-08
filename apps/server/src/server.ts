import cookieParser from 'cookie-parser';
import express from 'express';
import type { HelmetOptions } from 'helmet';
import Helmet from 'helmet';

import { env } from '../../../env.ts';
import registerRoutes from '../routes/router.ts';

const app = express();
const isProd = env.NODE_ENV === 'production';

const safe = <T>(arr: (T | undefined)[]): T[] => arr.filter(Boolean) as T[];

const helmetConfig: HelmetOptions = {
  // Frameguard: clickjacking protection
  frameguard: { action: 'deny' },

  // Cross-Origin-Opener-Policy: allow dev HMR on localhost
  crossOriginOpenerPolicy: { policy: isProd ? 'same-origin' : 'unsafe-none' },

  // COEP: only needed if you use SharedArrayBuffer or cross-origin resources
  crossOriginEmbedderPolicy: false, // keep false in dev to avoid issues

  // Content Security Policy
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],

      // Allow dev server for scripts & HMR
      scriptSrc: safe([
        "'self'",
        "'unsafe-inline'", // Vite injects inline HMR code
        !isProd ? 'http://localhost:5173' : undefined,
      ]),

      styleSrc: safe([
        "'self'",
        "'unsafe-inline'", // Tailwind inline styles
      ]),

      imgSrc: ["'self'", 'data:'],

      connectSrc: safe([
        "'self'",
        !isProd ? 'ws://localhost:5173' : undefined, // HMR websocket
      ]),
    },
  },
}


app.use(Helmet(helmetConfig));
app.use(express.json());
app.use(cookieParser());
registerRoutes(app);

const port = String(env.SERVER_PORT);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

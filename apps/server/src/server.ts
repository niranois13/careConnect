import cookieParser from 'cookie-parser';
import express from 'express';

import { env } from '../../../env.ts';
import registerRoutes from '../routes/index.ts';

const app = express();
app.use(express.json());
app.use(cookieParser());
registerRoutes(app);

const port = String(env.SERVER_PORT);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

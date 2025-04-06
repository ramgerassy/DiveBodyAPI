import express, { Request, Response } from 'express';

import { config } from './config.js';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ state: 'Success' });
});

app.listen(config.PORT, () => {
  console.log('listening on port:', config.PORT);
});

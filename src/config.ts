import * as dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ path: `../.env.${process.env.NODE_ENV || 'dev'}` });

const envSChema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.number().default(3000),
  DATABASE_URL: z.string().url(),
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  S3_BUCKET_NAME: z.string().optional(),
});

const result = envSChema.safeParse(process.env);

if (!result.success) {
  console.error(`Invalid env variables:${result.error.flatten().fieldErrors}`);
  process.exit(1);
}

export const config = result.data;

import { z } from 'zod';

const envSchema = z.object({
  VITE_MONGODB_URI: z.string().min(1),
  VITE_JWT_SECRET: z.string().min(32),
  VITE_PORT: z.string().default('3001'),
  VITE_NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const env = envSchema.safeParse(import.meta.env);

if (!env.success) {
  console.error('❌ Invalid environment variables:', env.error.toString());
  throw new Error('Invalid environment variables');
}

export const config = {
  database: {
    uri: env.data.VITE_MONGODB_URI,
  },
  jwt: {
    secret: env.data.VITE_JWT_SECRET,
    expiresIn: '24h',
  },
  server: {
    port: parseInt(env.data.VITE_PORT, 10),
    isDevelopment: env.data.VITE_NODE_ENV === 'development',
  },
};

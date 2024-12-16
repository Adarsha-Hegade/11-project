// Environment variable validation for client-side
const requiredEnvVars = ['VITE_API_URL'] as const;

export function validateEnv() {
  const missingVars = requiredEnvVars.filter(
    (envVar) => !import.meta.env[envVar]
  );

  if (missingVars.length > 0) {
    console.warn(
      `⚠️ Missing environment variables: ${missingVars.join(', ')}`
    );
  }
}
export const getEnv = (key: string, fallback?: string): string => {
  const env = process.env[key];
  if (!env) {
    if (fallback) return fallback;
    console.error(`Environment variable ${key} is not defined`);
    process.exit(1);
  }
  return env;
};

export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

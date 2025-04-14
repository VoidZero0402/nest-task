import { z } from 'zod';

const EnvironmentVariablesSchema = z.object({
    PORT: z.coerce.number().min(0).max(65535),
    POSTGRES_PORT: z.coerce.number(),
    POSTGRES_HOST: z.string(),
    POSTGRES_USERNAME: z.string(),
    POSTGRES_PASSWORD: z.string(),
    POSTGRES_DATABASE: z.string(),
    MONGODB_URI: z.string(),
    MONGODB_DATABASE: z.string(),
    REDIS_URL: z.string(),
    REDIS_PASSWORD: z.string(),
    CACHE_TTL: z.coerce.number(),
});

export function validate(config: Record<string, unknown>) {
    const { success, data, error } = EnvironmentVariablesSchema.safeParse(config);

    if (!success) {
        throw new Error(error.toString());
    }

    return data;
}

import { z } from 'zod';

const EnvironmentVariablesSchema = z.object({
    PORT: z.coerce.number().min(0).max(65535),
    MONGODB_URI: z.string()
});

export function validate(config: Record<string, unknown>) {
    const { success, data, error } = EnvironmentVariablesSchema.safeParse(config);

    if (!success) {
        throw new Error(error.toString());
    }

    return data;
}

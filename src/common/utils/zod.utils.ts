import { ZodError } from 'zod';

export function formatZodError(error: ZodError) {
    return error.issues.map((error) => ({ path: error.path[0], message: error.message }));
}

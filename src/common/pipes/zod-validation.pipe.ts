import { BadRequestException, HttpStatus } from '@nestjs/common';
import { createZodValidationPipe } from 'nestjs-zod';
import { ZodError } from 'zod';
import { formatZodError } from '../utils/zod.utils';

export const ZodValidationPipe = createZodValidationPipe({
    createValidationException(error: ZodError) {
        return new BadRequestException({
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Validation Failed',
            errors: formatZodError(error),
        });
    },
});

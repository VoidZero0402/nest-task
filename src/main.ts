import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { patchNestJsSwagger } from 'nestjs-zod';
import { AppModule } from './app.module';
import { ZodValidationPipe } from './common/pipes/zod-validation.pipe';
import { SwaggerConfig } from './config/swagger.config';
import { EnvConfig } from './common/interfaces/env.interface';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

    const configService = app.get(ConfigService<EnvConfig, true>);

    app.useGlobalPipes(new ZodValidationPipe());

    patchNestJsSwagger();

    SwaggerConfig.init(app);

    const port = configService.get('PORT', { infer: true });

    await app.listen(port, () => {
        console.log(`Server Running On http://localhost:${port}`);
    });
}

bootstrap();

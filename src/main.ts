import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { EnvConfig } from './common/interfaces/env.interface';
import { SwaggerConfig } from './config/swagger.config';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

    SwaggerConfig.init(app);

    const configService = app.get(ConfigService<EnvConfig>);

    const port = configService.get('PORT');

    await app.listen(port, () => {
        console.log(`Server Running On http://localhost:${port}`);
    });
}

bootstrap();

import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export class SwaggerConfig {
    static init(app: INestApplication) {
        const config = new DocumentBuilder()
            .setTitle('Task Management Project')
            .setDescription('The Server Side Of Task Management Project With NestJS')
            .setVersion('1.0.0')
            .addBearerAuth(this.getBearerAuthConfig())
            .build();

        const documentFactory = () => SwaggerModule.createDocument(app, config);

        SwaggerModule.setup('api-doc', app, documentFactory);
    }

    static getBearerAuthConfig(): SecuritySchemeObject {
        return {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            in: 'header',
            description: 'Bearer Token Authentication',
        };
    }
}

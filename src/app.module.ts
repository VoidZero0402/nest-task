import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './common/validations/env.validation';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            validate,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

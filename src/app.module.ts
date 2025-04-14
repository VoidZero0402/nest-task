import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { validate } from './common/validations/env.validation';
import { TypeOrmConfig } from './config/typeorm.config';
import { MongooseConfig } from './config/mongoose.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            validate,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: TypeOrmConfig.getFactory,
            inject: [ConfigService],
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: MongooseConfig.getFactory,
            inject: [ConfigService],
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

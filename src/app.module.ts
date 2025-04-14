import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { validate } from './common/validations/env.validation';
import { TypeOrmConfig } from './config/typeorm.config';
import { MongooseConfig } from './config/mongoose.config';
import { CacheConfig } from './config/cache.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            validate,
        }),
        TypeOrmModule.forRootAsync({
            useFactory: TypeOrmConfig.getFactory,
            inject: [ConfigService],
        }),
        MongooseModule.forRootAsync({
            useFactory: MongooseConfig.getFactory,
            inject: [ConfigService],
        }),
        CacheModule.registerAsync({
            isGlobal: true,
            useFactory: CacheConfig.getFactory,
            inject: [ConfigService],
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisModule } from './common/packages/ioredis';
import { validate } from './common/validations/env.validation';
import { getTypeOrmFactory } from './config/typeorm.config';
import { getMongooseFactory } from './config/mongoose.config';
import { getCacheFactory } from './config/cache.config';
import { getIORedisFactory } from './config/ioredis.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            validate,
        }),
        TypeOrmModule.forRootAsync({
            useFactory: getTypeOrmFactory,
            inject: [ConfigService],
        }),
        MongooseModule.forRootAsync({
            useFactory: getMongooseFactory,
            inject: [ConfigService],
        }),
        CacheModule.registerAsync({
            isGlobal: true,
            useFactory: getCacheFactory,
            inject: [ConfigService],
        }),
        RedisModule.forRootAsync({
            useFactory: getIORedisFactory,
            inject: [ConfigService],
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

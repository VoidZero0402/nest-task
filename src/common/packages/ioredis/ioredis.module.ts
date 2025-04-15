import { DynamicModule, Module, Global } from '@nestjs/common';
import { createRedisProvider, createRedisAsyncProvider } from './ioredis.provider';
import { RedisModuleOptions, RedisModuleAsyncOptions } from './interfaces';

@Global()
@Module({})
export class RedisModule {
    static forRoot(options: RedisModuleOptions = {}): DynamicModule {
        const provider = createRedisProvider(options);

        return {
            module: RedisModule,
            providers: [provider],
            exports: [provider],
        };
    }

    static forRootAsync(options: RedisModuleAsyncOptions = {}): DynamicModule {
        const provider = createRedisAsyncProvider(options);

        return {
            module: RedisModule,
            providers: [provider],
            exports: [provider],
        };
    }
}

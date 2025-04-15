import { Provider } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisModuleOptions, RedisModuleAsyncOptions } from './interfaces';
import { getRedisToken } from './common';

export function createRedisProvider(options: RedisModuleOptions): Provider {
    return {
        provide: getRedisToken(options.name),
        useFactory: () => new Redis(options),
    };
}

export function createRedisAsyncProvider(options: RedisModuleAsyncOptions): Provider {
    return {
        provide: getRedisToken(options.name),
        useFactory: async (...args: any[]) => {
            const redisOptions = options.useFactory ? await options.useFactory(...args) : {};
            return new Redis(redisOptions);
        },
        inject: options.inject ?? [],
    };
}

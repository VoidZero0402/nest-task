import { RedisOptions } from 'ioredis';

export interface RedisModuleOptions extends RedisOptions {
    name?: string;
}

export interface RedisModuleAsyncOptions {
    name?: string;
    useFactory?: (...args: any[]) => Promise<RedisModuleOptions> | RedisModuleOptions;
    inject?: any[];
}

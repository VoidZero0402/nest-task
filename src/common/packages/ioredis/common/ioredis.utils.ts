import { DEFAULT_REDIS_CLINET } from '../ioredis.constants';

export function getRedisToken(name?: string): string {
    return name && name !== DEFAULT_REDIS_CLINET ? `REDIS_CLINET_${name.toUpperCase()}` : DEFAULT_REDIS_CLINET;
}

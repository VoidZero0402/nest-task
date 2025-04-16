import { CacheModuleOptions } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from 'src/common/interfaces/env.interface';

export function getCacheFactory(configService: ConfigService<EnvConfig>): CacheModuleOptions {
    return {
        isGlobal: true,
        stores: [
            createKeyv({
                url: configService.get('REDIS_URL'),
                password: configService.get('REDIS_PASSWORD'),
            }),
        ],
        ttl: configService.get('CACHE_TTL'),
    };
}

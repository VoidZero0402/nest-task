import { RedisModuleOptions } from 'src/common/packages/ioredis';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from 'src/common/interfaces/env.interface';

export function getIORedisFactory(configService: ConfigService<EnvConfig>): RedisModuleOptions {
    return {
        port: configService.get('REDIS_PORT'),
        host: configService.get('REDIS_HOST'),
        password: configService.get('REDIS_PASSWORD'),
    };
}

import { RedisModuleOptions } from 'src/common/packages/ioredis';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from 'src/common/interfaces/env.interface';

export class IORedisConfig {
    static async getFactory(configService: ConfigService<EnvConfig>): Promise<RedisModuleOptions> {
        return {
            port: configService.get('REDIS_PORT'),
            host: configService.get('REDIS_HOST'),
            password: configService.get('REDIS_PASSWORD'),
        };
    }
}

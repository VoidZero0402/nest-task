import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from 'src/common/interfaces/env.interface';

export class TypeOrmConfig {
    static async getFactory(configService: ConfigService<EnvConfig>): Promise<TypeOrmModuleOptions> {
        return {
            type: 'postgres',
            port: configService.get('POSTGRES_PORT'),
            host: configService.get('POSTGRES_HOST'),
            username: configService.get('POSTGRES_USERNAME'),
            password: configService.get('POSTGRES_PASSWORD'),
            database: configService.get('POSTGRES_DATABASE'),
            synchronize: true,
            entities: ['dist/**/**/*.entity.{ts,js}'],
        };
    }
}

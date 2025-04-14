import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from 'src/common/interfaces/env.interface';

export class MongooseConfig {
    static getFactory(configService: ConfigService<EnvConfig>): MongooseModuleOptions {
        return {
            uri: configService.get('MONGODB_URI'),
            dbName: configService.get('MONGODB_DATABASE'),
        };
    }
}

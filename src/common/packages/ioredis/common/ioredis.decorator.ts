import { Inject } from '@nestjs/common';
import { getRedisToken } from './ioredis.utils';

export const InjectClient = (name?: string) => Inject(getRedisToken(name));

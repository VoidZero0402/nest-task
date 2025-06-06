export interface EnvConfig {
    PORT: number;
    POSTGRES_PORT: number;
    POSTGRES_HOST: string;
    POSTGRES_USERNAME: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DATABASE: string;
    MONGODB_URI: string;
    MONGODB_DATABASE: string;
    REDIS_URL: string;
    REDIS_HOST: string;
    REDIS_PORT: number;
    REDIS_PASSWORD: string;
    CACHE_TTL: number;
}

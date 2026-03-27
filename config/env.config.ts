import { stagingConfig } from './environments/staging';
import { preprodConfig } from './environments/preprod';
import { prodConfig } from './environments/prod';

const ENV = process.env.ENV || 'staging';

const configs: Record<string, any> = {
    staging: stagingConfig,
    preprod: preprodConfig,
    prod: prodConfig
};

if (!configs[ENV]) {
    throw new Error(`Environment ${ENV} is not supported. Use: staging, preprod, or prod.`);
}

export const environment = configs[ENV];

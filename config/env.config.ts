import { stagingConfig } from './environments/staging.js';
import { preprodConfig } from './environments/preprod.js';
import { prodConfig } from './environments/prod.js';

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

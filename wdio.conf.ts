import { environment } from './config/env.config';

export const config: WebdriverIO.Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './tests/**/*.ts'
    ],
    // Patterns to exclude.
    exclude: [],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [environment.capabilities],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    baseUrl: environment.baseUrl,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    protocol: 'http',
    hostname: 'localhost',
    port: 4723,
    path: '/',
    // services: ['visual'],
    services: [],
    framework: 'mocha',
    reporters: [
        'spec',
        // ['mochawesome', {
        //     outputDir: './reports',
        //     outputFileFormat: function (opts) {
        //         return `results-${opts.cid}.json`
        //     }
        // }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}

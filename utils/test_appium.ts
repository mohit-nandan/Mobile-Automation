import { remote } from 'webdriverio';
import { stagingConfig } from '../config/environments/staging';

(async () => {
    const browser = await remote({
        protocol: 'http',
        hostname: 'localhost',
        port: 4723,
        path: '/',
        capabilities: stagingConfig.capabilities
    });

    console.log('Connected to Appium!');
    const size = await browser.getWindowSize();
    console.log('Window Size:', size);

    await browser.deleteSession();
    console.log('Session deleted.');
})().catch(err => {
    console.error('Error connecting to Appium:', err);
    process.exit(1);
});

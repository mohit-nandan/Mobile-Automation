import * as path from 'path';

/**
 * Configuration for mobile capabilities
 */
export const capabilities = {
    "platformName": "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "emulator-5554",
    "appium:app": path.join(process.cwd(), "apps", "zipppee-staging.apk"),
    "appium:appPackage": "com.zippee.ridercod",
    "appium:appActivity": "com.zippee.ridercod.MainActivity",
    "appium:newCommandTimeout": 3600,
    "appium:noReset": true
};


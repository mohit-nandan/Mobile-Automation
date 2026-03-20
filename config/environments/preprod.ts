export const preprodConfig = {
    baseUrl: 'https://preprod.zipppee.com',
    capabilities: {
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'emulator-5554',
        'appium:app': 'C:\\Users\\User\\Desktop\\mobile-automation\\apps\\zipppee-preprod.apk',
        'appium:appPackage': 'com.zippee.ridercod.preprod',
        'appium:appActivity': 'com.zippee.ridercod.MainActivity',
        'appium:noReset': true
    }
};

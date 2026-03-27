import { browser } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';
export default class BasePage {

    // ======================
    // ELEMENT ACTIONS
    // ======================

    async click(selector: string) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout: 10000 });
        await element.click();
    }

    async type(element: ChainablePromiseElement, value: string) {
        const el = await element;

        await el.waitForDisplayed({ timeout: 10000 });
        await el.setValue(value);
    }

    async getText(selector: string) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout: 10000 });
        return await element.getText();
    }

    async isDisplayed(selector: string) {
        const element = await $(selector);
        return await element.isDisplayed();
    }

    // ======================
    // WAIT METHODS
    // ======================

    async waitForVisible(selector: string) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout: 10000 });
    }

    async waitForClickable(selector: string) {
        const element = await $(selector);
        await element.waitForClickable({ timeout: 10000 });
    }

    async waitForHidden(selector: string) {
        const element = await $(selector);
        await element.waitForDisplayed({ reverse: true, timeout: 10000 });
    }

    // ======================
    // CONDITIONAL ACTIONS
    // ======================

    async clickIfDisplayed(selector: string) {
        const element = await $(selector);
        if (await element.isDisplayed()) {
            await element.click();
        }
    }

    async typeIfDisplayed(selector: string, text: string) {
        const element = await $(selector);
        if (await element.isDisplayed()) {
            await element.setValue(text);
        }
    }

    // ======================
    // SCROLL / SWIPE
    // ======================

    async scrollToText(text: string) {
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`);
    }

    // async swipeUp() {
    //     const { height, width } = await browser.getWindowSize();

    //     await browser.touchAction([
    //         { action: 'press', x: width / 2, y: height * 0.8 },
    //         { action: 'moveTo', x: width / 2, y: height * 0.2 },
    //         'release'
    //     ]);
    // }

    // async swipeDown() {
    //     const { height, width } = await browser.getWindowSize();

    //     await browser.touchAction([
    //         { action: 'press', x: width / 2, y: height * 0.2 },
    //         { action: 'moveTo', x: width / 2, y: height * 0.8 },
    //         'release'
    //     ]);
    // }

    // ======================
    // APP CONTROL
    // ======================

    async resetApp() {
        await browser.reloadSession();
    }

    async pause(ms: number) {
        await browser.pause(ms);
    }

    // ======================
    // ALERT / PERMISSIONS
    // ======================

    async acceptAlert() {
        try {
            await browser.acceptAlert();
        } catch (e) {
            console.log("No alert present");
        }
    }

    async handlePermissions() {
        try {
            const allowBtn = await $('//android.widget.Button[@text="Allow"]');
            if (await allowBtn.isDisplayed()) {
                await allowBtn.click();
            }
        } catch (e) { }
    }

    // ======================
    // DEBUG / UTIL
    // ======================

    async log(message: string) {
        console.log(`🔹 ${message}`);
    }

    async takeScreenshot(name: string) {
        await browser.saveScreenshot(`./screenshots/${name}.png`);
    }

    public open(path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
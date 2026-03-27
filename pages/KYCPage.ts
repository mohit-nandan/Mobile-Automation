import BasePage from "./BasePage";

class KYCPage extends BasePage {

    async capturePhotoFromCamera(uploadIndex: number) {
        await this.click(`android=new UiSelector().description("Upload").instance(${uploadIndex})`);
        await this.click('android=new UiSelector().text("Camera")');
        await this.handlePermissions();
        await this.pause(2000);
        await this.click('android=new UiSelector().className("android.view.ViewGroup").instance(6)');
        await this.pause(2000);
    }

    async swipeup() {
        const { height, width } = await browser.getWindowSize();
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: Math.round(width / 2), y: Math.round(height * 0.8) },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 1000, x: Math.round(width / 2), y: Math.round(height * 0.3) },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
        await driver.releaseActions();
    }

    async uploadPanCard() {
        await this.waitForVisible('android=new UiSelector().text("Eg: ABCDE1234Q")');
        await this.capturePhotoFromCamera(0);
        const element = await $('android=new UiSelector().text("Eg: ABCDE1234Q")');
        await this.type(element, 'CLVPN6067L');
    }

    async uploadAadhaarFront() {
        await this.swipeup();
        await this.capturePhotoFromCamera(0);
    }

    async uploadAadhaarBack() {
        await this.swipeup();
        await this.waitForVisible('android=new UiSelector().description("Upload")');
        await this.click('android=new UiSelector().description("Upload")')
        await this.click('android=new UiSelector().text("Camera")');
        await this.handlePermissions();
        await this.pause(2000);
        await this.click('android=new UiSelector().className("android.view.ViewGroup").instance(6)');
        await this.pause(2000);
    }

    async TypeAdhaarNumber() {
        await this.swipeup();
        await this.waitForVisible('android=new UiSelector().text("Eg: 1234-1222-2222")');
        const element = await $('android=new UiSelector().text("Eg: 1234-1222-2222")');
        await this.type(element, '111111111111');
    }

    async clickSelfie() {
        await this.waitForVisible('android=new UiSelector().text("Click Selfie")');
        await this.click('android=new UiSelector().text("Click Selfie")');
        await this.click('android=new UiSelector().text("Camera")');
        await this.handlePermissions();
        await this.pause(2000);
        await this.click('android=new UiSelector().className("android.view.ViewGroup").instance(6)');
        await this.pause(2000);

    }

    async clickSubmitButton() {
        await this.waitForVisible('android=new UiSelector().description("Submit")');
        await this.click('android=new UiSelector().description("Submit")');
    }

}

export default new KYCPage();

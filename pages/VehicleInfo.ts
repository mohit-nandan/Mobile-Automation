import BasePage from "./BasePage";

class VehicleInfoPage extends BasePage {

    async SelectVehicleOwnerShip() {
        await this.waitForVisible('android=new UiSelector().description("eg: Owned")');
        await this.click('android=new UiSelector().description("eg: Owned")');
        await this.click('android=new UiSelector().description("Owned")');
    }

    async SelectVehicleType() {
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
        await this.waitForVisible('android=new UiSelector().description("Select your Vehicle Type")');
        await this.click('android=new UiSelector().description("Select your Vehicle Type")');
        await this.click('android=new UiSelector().description("Bike (2-wheeler)")');
    }

    async capturePhotoFromCamera(uploadIndex: number) {
        await this.click(`android=new UiSelector().description("Upload").instance(${uploadIndex})`);

        await this.click('android=new UiSelector().text("Camera")');

        await this.handlePermissions();

        await this.pause(2000);

        await this.click('android=new UiSelector().className("android.view.ViewGroup").instance(6)');

        await this.pause(2000);
    }

    async uploadRC() {
        await this.capturePhotoFromCamera(0);
        await this.waitForVisible('android=new UiSelector().text("Eg: UP01DR1234")');
        const element = await $('android=new UiSelector().text("Eg: UP01DR1234")');
        await this.type(element, 'UP78HF0533');
    }

    async uploadDL() {
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
        await this.capturePhotoFromCamera(0);
    }

    async insuranceUpload() {
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
        await this.waitForVisible('android=new UiSelector().description("Upload")');
        await this.click('android=new UiSelector().description("Upload")');
        await this.click('android=new UiSelector().text("Camera")');
        await this.handlePermissions();
        await this.pause(2000);
        await this.click('android=new UiSelector().className("android.view.ViewGroup").instance(6)');
        await this.pause(2000);

    }

    async clickVehicleInfoSubmitButton() {
        await this.waitForVisible('~Submit');
        await this.click('~Submit');
    }
}

export default new VehicleInfoPage();

import BasePage from "./BasePage";
import onboardingData from "../utils/Fixtures/staging/onboarding.json";

class KYCPage extends BasePage {

    async capturePhotoFromCamera(uploadIndex: number) {
        await this.click(`android=new UiSelector().description("Upload").instance(${uploadIndex})`);
        await this.waitForVisible('android=new UiSelector().text("Camera")');
        await this.click('android=new UiSelector().text("Camera")');
        await this.handlePermissions();
        await this.pause(2000);
        await this.click('android=new UiSelector().className("android.view.ViewGroup").instance(6)');
        await this.pause(2000);
    }

    async uploadPanCard() {
        await this.waitForVisible('android=new UiSelector().text("Eg: ABCDE1234Q")');
        await this.capturePhotoFromCamera(0);
        const element = await $('android=new UiSelector().text("Eg: ABCDE1234Q")');
        await this.type(element, onboardingData.KYCInfo.panNumber);
    }

    async uploadAadhaarFront() {
        await this.swipeUp(0.8, 0.3, 1000);
        await this.capturePhotoFromCamera(0);
    }

    async uploadAadhaarBack() {
        await this.swipeUp(0.8, 0.3, 1000);
        await this.waitForVisible('android=new UiSelector().description("Upload")');
        await this.click('android=new UiSelector().description("Upload")')
        await this.waitForVisible('android=new UiSelector().text("Camera")');
        await this.click('android=new UiSelector().text("Camera")');
        await this.handlePermissions();
        await this.pause(2000);
        await this.click('android=new UiSelector().className("android.view.ViewGroup").instance(6)');
        await this.pause(2000);
    }

    async TypeAdhaarNumber() {
        await this.swipeUp(0.8, 0.3, 1000);
        await this.waitForVisible('android=new UiSelector().text("Eg: 1234-1222-2222")');
        const element = await $('android=new UiSelector().text("Eg: 1234-1222-2222")');
        await this.type(element, onboardingData.KYCInfo.aadhaarNumber);
    }

    async clickSelfie() {
        await this.waitForVisible('android=new UiSelector().text("Click Selfie")');
        await this.click('android=new UiSelector().text("Click Selfie")');
        await this.waitForVisible('android=new UiSelector().text("Camera")');
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

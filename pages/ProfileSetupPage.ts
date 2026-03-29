import BasePage from "./BasePage";
import onboardingData from "../utils/Fixtures/staging/onboarding.json";

class ProfileSetupPage extends BasePage {

    async EnterPincode() {
        await this.waitForVisible('android=new UiSelector().text("Enter Pincode")');
        await this.click('android=new UiSelector().text("Enter Pincode")');
        const input = await $('android=new UiSelector().text("Enter Pincode")');
        await input.clearValue();
        await input.setValue(onboardingData.ProfileSetup.pincode);
        await this.pause(2000);
        await this.swipeUp(0.8, 0.3, 1000);

    }

    async EnterAddress() {
        const getaddressinput1 = await $('android=new UiSelector().text("Eg: Amar Villar Sector 43")');
        const getaddressinput2 = await $('android=new UiSelector().text("Eg: Near U block gurugram")');
        await getaddressinput1.waitForDisplayed();
        await getaddressinput1.click();
        await getaddressinput1.clearValue();
        await getaddressinput1.setValue(onboardingData.ProfileSetup.address);
        await this.pause(2000);
        await getaddressinput2.waitForDisplayed();
        await getaddressinput2.click();
        await getaddressinput2.clearValue();
        await getaddressinput2.setValue(onboardingData.ProfileSetup.address);
        await this.pause(2000);
    }

    async clickSubmitButton() {
        await this.waitForVisible('android=new UiSelector().description("Submit")');
        await this.click('android=new UiSelector().description("Submit")');
    }

}

export default new ProfileSetupPage();
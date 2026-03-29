import BasePage from "./BasePage";
import onboardingData from "../utils/Fixtures/staging/onboarding.json";

class NominatioPage extends BasePage {

    getNomineeNameInputFeild() {
        this.waitForVisible('android=new UiSelector().text("Eg:- Praveen Kumar").instance(0)');
        return $('android=new UiSelector().text("Eg:- Praveen Kumar").instance(0)');
    }

    getNomineeContactNumberInputFeild() {
        this.waitForVisible('android=new UiSelector().text("Eg: 9876543210").instance(0)');
        return $('android=new UiSelector().text("Eg: 9876543210").instance(0)');
    }

    getNomineeRelationInputFeild() {
        this.waitForVisible('android=new UiSelector().description("Select Option")');
        return $('android=new UiSelector().description("Select Option")');

    }

    getEmergencyContactNameInputFeild() {
        this.waitForVisible('android=new UiSelector().text("Eg:- Praveen Kumar")');
        return $('android=new UiSelector().text("Eg:- Praveen Kumar")');
    }

    getEmergencyContactNumberInputFeild() {
        this.waitForVisible('android=new UiSelector().text("Eg: 9876543210")');
        return $('android=new UiSelector().text("Eg: 9876543210")');
    }



    async EnterNomineeDetails() {
        await this.getNomineeNameInputFeild().waitForDisplayed();
        await this.getNomineeNameInputFeild().click();
        await this.getNomineeNameInputFeild().clearValue();
        await this.getNomineeNameInputFeild().setValue(onboardingData.Nomination.nomineeName);
        await this.pause(2000);
        await this.getNomineeRelationInputFeild().waitForDisplayed();
        await this.getNomineeRelationInputFeild().click();
        await this.pause(2000);
        await this.click('android=new UiSelector().text("Father")');
        await this.pause(2000);
        await this.getNomineeContactNumberInputFeild().waitForDisplayed();
        await this.getNomineeContactNumberInputFeild().click();
        await this.getNomineeContactNumberInputFeild().clearValue();
        await this.getNomineeContactNumberInputFeild().setValue(onboardingData.Nomination.nomineeContact);
        await this.pause(2000);
        await this.getEmergencyContactNameInputFeild().waitForDisplayed();
        await this.getEmergencyContactNameInputFeild().click();
        await this.getEmergencyContactNameInputFeild().clearValue();
        await this.getEmergencyContactNameInputFeild().setValue(onboardingData.Nomination.emergencyName);
        await this.pause(2000);
        await this.getEmergencyContactNumberInputFeild().waitForDisplayed();
        await this.getEmergencyContactNumberInputFeild().click();
        await this.getEmergencyContactNumberInputFeild().clearValue();
        await this.getEmergencyContactNumberInputFeild().setValue(onboardingData.Nomination.emergencyContact);
        await this.pause(2000);
    }

    async clickSubmitButton() {
        await this.waitForVisible('android=new UiSelector().description("Submit")');
        await this.click('android=new UiSelector().description("Submit")');
    }

}

export default new NominatioPage();
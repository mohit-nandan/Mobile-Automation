import BasePage from "./BasePage";
import onboardingData from "../utils/Fixtures/staging/onboarding.json";

class BankDetailPage extends BasePage {

    getAccountHoldeInputFeild() {
        this.waitForVisible('android=new UiSelector().text("Eg: Ram Kumar")');
        return $('android=new UiSelector().text("Eg: Ram Kumar")');
    }

    getAccountNumberInputFeild() {
        this.waitForVisible('android=new UiSelector().text("Eg: 090909989099").instance(0)');
        return $('android=new UiSelector().text("Eg: 090909989099").instance(0)');
    }

    getConfirmAccountNumberInputFeild() {
        this.waitForVisible('android=new UiSelector().text("Eg: 090909989099")');
        return $('android=new UiSelector().text("Eg: 090909989099")');
    }

    getBankNameInputFeild() {
        this.waitForVisible('android=new UiSelector().text("Eg: State Bank Of India")');
        return $('android=new UiSelector().text("Eg: State Bank Of India")');
    }

    getIFSCCodeInputFeild() {
        this.waitForVisible('android=new UiSelector().text("Eg: UTIB0000123")');
        return $('android=new UiSelector().text("Eg: UTIB0000123")');
    }

    getBankBranchName() {
        this.waitForVisible('android=new UiSelector().text("Eg: State Bank Of India, Mumbai")');
        return $('android=new UiSelector().text("Eg: State Bank Of India, Mumbai")');
    }

    async EnterBankDetails() {
        await this.getAccountHoldeInputFeild().waitForDisplayed();
        await this.getAccountHoldeInputFeild().click();
        await this.getAccountHoldeInputFeild().clearValue();
        await this.getAccountHoldeInputFeild().setValue(onboardingData.BankDetails.accountHolder);
        await this.pause(2000);
        await this.getAccountNumberInputFeild().waitForDisplayed();
        await this.getAccountNumberInputFeild().click();
        await this.getAccountNumberInputFeild().clearValue();
        await this.getAccountNumberInputFeild().setValue(onboardingData.BankDetails.accountNumber);
        await this.pause(2000);
        await this.getConfirmAccountNumberInputFeild().waitForDisplayed();
        await this.getConfirmAccountNumberInputFeild().click();
        await this.getConfirmAccountNumberInputFeild().clearValue();
        await this.getConfirmAccountNumberInputFeild().setValue(onboardingData.BankDetails.accountNumber);
        await this.pause(2000);
        await this.getBankNameInputFeild().waitForDisplayed();
        await this.getBankNameInputFeild().click();
        await this.getBankNameInputFeild().clearValue();
        await this.getBankNameInputFeild().setValue(onboardingData.BankDetails.bankName);
        await this.pause(2000);
        await this.getIFSCCodeInputFeild().waitForDisplayed();
        await this.getIFSCCodeInputFeild().click();
        await this.getIFSCCodeInputFeild().clearValue();
        await this.getIFSCCodeInputFeild().setValue(onboardingData.BankDetails.ifscCode);
        await this.pause(2000);
        await this.getBankBranchName().waitForDisplayed();
        await this.getBankBranchName().click();
        await this.getBankBranchName().clearValue();
        await this.getBankBranchName().setValue(onboardingData.BankDetails.branchName);
        await this.pause(2000);
    }

    async clickSubmitButton() {
        await this.waitForVisible('android=new UiSelector().description("Submit")');
        await this.click('android=new UiSelector().description("Submit")');
    }

}

export default new BankDetailPage();
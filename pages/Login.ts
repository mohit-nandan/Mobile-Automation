import BasePage from "./BasePage";

class LoginPage extends BasePage {

    getLoginButton() {
        return $('~Log In');
    }

    getSignupButton() {
        return $('~Sign Up');
    }

    getFirstNameField() {
        return $('android=new UiSelector().text("Eg: Kamlesh")');
    }

    getLastNameField() {
        return $('android=new UiSelector().text("Eg: Kumar")');
    }

    getPhoneNumberField() {
        return $('android=new UiSelector().text("Eg: 8768768768")');
    }

    // ------------------------------------------------------------

    async clickLoginButton() {
        await this.waitForVisible('~Log In');
        await this.getLoginButton().click();
    }

    async clickSignupButton() {
        await this.waitForVisible('~Sign Up');
        await this.getSignupButton().click();
    }

    async enterFirstName(firstName: string) {
        await this.getFirstNameField().setValue(firstName);
    }

    async enterLastName(lastName: string) {
        await this.getLastNameField().setValue(lastName);
    }

    async enterPhoneNumber(phoneNumber: string) {
        await this.getPhoneNumberField().setValue(phoneNumber);
    }

    async clickSubmitButton() {
        await this.click('~Submit');
    }
}

export default new LoginPage();
import BasePage from "./BasePage";
import * as fs from "fs";
import db from "../utils/DatabaseUtil";

class LoginOnboardingPage extends BasePage {

    async getPhoneNumber() {
        const data = JSON.parse(fs.readFileSync("./utils/Fixtures/staging/onboarding.json", "utf-8"));
        return data.DynamicData.phone;
    }

    async getOtpField(index: number) {
        return $(`android=new UiSelector().resourceId("otp-input").instance(${index})`);
    }

    async getinputfield() {
        const el = await $('android=new UiSelector().text("Eg: 9879879870")');
        await el.waitForDisplayed();
        return el;
    }

    async LoginWithPhoneNumber() {
        const input = await this.getinputfield();
        const phone = await this.getPhoneNumber();
        await input.setValue(phone);
        await this.waitForVisible('~Proceed');
        await this.click('~Proceed');
    }

    async getOTPfromDatabase() {
        try {
            for (let i = 0; i < 15; i++) {
                const dbPhone = "+91" + await this.getPhoneNumber();
                const otp = await db("zippeeriderapp_rider").select("otp").where("phone_number", dbPhone).orderBy("id", "desc").first();
                if (otp && otp.otp) {
                    this.log("OTP: " + otp.otp);
                    return String(otp.otp);
                }
                await this.pause(1000);
            }
            this.log("OTP not found after wait");
            return null;
        } catch (error) {
            this.log("Error in GetOtpfromDatabase" + error);
        }
    }

    async enterOtp() {
        await this.waitForVisible('android=new UiSelector().resourceId("otp-input").instance(0)');
        const otp = await this.getOTPfromDatabase();
        if (otp) {
            const el = await this.getOtpField(0);
            await el.click();
            await this.pause(500);
            await browser.keys(otp.split(''));
        }
    }

    async clickSubmitButton() {
        await this.waitForVisible('android=new UiSelector().text("Submit")');
        await this.click('android=new UiSelector().text("Submit")');
    }
}

export default new LoginOnboardingPage();
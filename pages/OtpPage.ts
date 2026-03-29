import BasePage from "./BasePage";
import { browser } from '@wdio/globals';
import * as fs from "fs";
import db from "../utils/DatabaseUtil";

class OtpPage extends BasePage {

    get currentPhoneNumber() {
        return JSON.parse(fs.readFileSync("./utils/Fixtures/staging/onboarding.json", "utf-8")).DynamicData.phone;
    }

    getOtpField(index: number) {
        return $(`android=new UiSelector().resourceId("otp-input").instance(${index})`);
    }

    async getOtpFromDatabase() {
        try {
            for (let i = 0; i < 15; i++) {
                const dbPhone = "+91" + this.currentPhoneNumber;
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
            this.log("Error in getOtpFromDatabase" + error);
        }
    }

    async enterOtp() {
        await this.waitForVisible('android=new UiSelector().resourceId("otp-input").instance(0)');
        const otp = await this.getOtpFromDatabase();
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

export default new OtpPage();
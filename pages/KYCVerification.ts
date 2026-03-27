import BasePage from "./BasePage";
import db from "../utils/DatabaseUtil";
import * as fs from "fs";

class KYCVerificationPage extends BasePage {

    async getPhoneNumber() {
        const data = JSON.parse(fs.readFileSync("./utils/Fixtures/Phone.json", "utf-8"));
        return data.phone - 1;
    }

    async pullToRefresh() {
        const { height, width } = await browser.getWindowSize();
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: Math.round(width / 2), y: Math.round(height * 0.2) },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 1000, x: Math.round(width / 2), y: Math.round(height * 0.8) },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
        await driver.releaseActions();
    }

    async clickApproveButton() {
        let isApproved = false;

        for (let i = 0; i < 12; i++) {
            const phone = await this.getPhoneNumber();
            const dbPhone = "+91" + phone;
            await this.pullToRefresh();
            const RiderOnboarding = await db("zippeeriderapp_rider")
                .select("kyc_status")
                .where("phone_number", dbPhone)
                .orderBy("id", "desc")
                .first();

            if (RiderOnboarding && RiderOnboarding.kyc_status === "verified") {
                isApproved = true;
                await this.log("KYC Status is verified in DB!");
                break;
            }

            await this.log(`KYC status is ${RiderOnboarding?.kyc_status || 'not found'}. Waiting 10 seconds...`);
            await this.pause(10000);
        }

        if (isApproved) {
            await this.waitForVisible('android=new UiSelector().description("Proceed")');
            await this.click('android=new UiSelector().description("Proceed")');
        } else {
            throw new Error(`KYC status was not verified after waiting for 2 minutes`);
        }
    }

}

export default new KYCVerificationPage();
import BasePage from "./BasePage";
import db from "../utils/DatabaseUtil";
import * as fs from "fs";

class KYCVerificationPage extends BasePage {

    async getPhoneNumber() {
        const data = JSON.parse(fs.readFileSync("./utils/Fixtures/staging/onboarding.json", "utf-8"));
        return data.DynamicData.phone;
    }

    async pullToRefresh() {
        await this.swipeDown(0.2, 0.8, 1000);
    }

    async clickApproveButton() {
        let isApproved = false;
        const phone = await this.getPhoneNumber();
        const dbPhone = "+91" + phone;
        for (let i = 0; i < 12; i++) {

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
            await this.log("rider phone number : " + dbPhone);
            await this.log("isapproved : " + isApproved);
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
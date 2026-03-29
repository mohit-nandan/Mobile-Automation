import BasePage from "./BasePage";
import onboardingData from "../utils/Fixtures/staging/onboarding.json";

class VehicleInfoPage extends BasePage {

    get vehicleOwnershipField() { return 'android=new UiSelector().description("eg: Owned")'; }
    get vehicleOwnershipOption() { return 'android=new UiSelector().description("Owned")'; }

    get vehicleTypeField() { return 'android=new UiSelector().description("Select your Vehicle Type")'; }
    get vehicleTypeOption() { return 'android=new UiSelector().description("Bike (2-wheeler)")'; }

    get cameraOption() { return 'android=new UiSelector().text("Camera")'; }
    get cameraShutterBtn() { return 'android=new UiSelector().className("android.view.ViewGroup").instance(6)'; }

    get rcNumberField() { return 'android=new UiSelector().text("Eg: UP01DR1234")'; }

    get genericUploadDocBtn() { return 'android=new UiSelector().description("Upload")'; }
    get submitBtn() { return '~Submit'; }

    async SelectVehicleOwnerShip() {
        await this.waitForVisible(this.vehicleOwnershipField);
        await this.click(this.vehicleOwnershipField);
        await this.click(this.vehicleOwnershipOption);
    }

    async SelectVehicleType() {
        await this.swipeUp(1000);
        await this.waitForVisible(this.vehicleTypeField);
        await this.click(this.vehicleTypeField);
        await this.click(this.vehicleTypeOption);
    }

    async capturePhotoFromCamera(uploadIndex: number) {
        await this.click(`android=new UiSelector().description("Upload").instance(${uploadIndex})`);
        await this.waitForVisible(this.cameraOption);
        await this.click(this.cameraOption);
        await this.handlePermissions();

        await this.pause(2000); // UI renders before camera hardware is ready
        await this.click(this.cameraShutterBtn);
        await this.pause(2000); // Allow camera to process
    }

    async uploadRC() {
        await this.capturePhotoFromCamera(0);
        await this.waitForVisible(this.rcNumberField);
        const element = await $(this.rcNumberField);
        await this.type(element, onboardingData.VehicleInfo.rcNumber);
    }

    async uploadDL() {
        await this.swipeUp(1000);
        await this.capturePhotoFromCamera(0);
    }

    async insuranceUpload() {
        await this.swipeUp(1000);
        await this.waitForVisible(this.genericUploadDocBtn);
        await this.click(this.genericUploadDocBtn);
        await this.waitForVisible(this.cameraOption);
        await this.click(this.cameraOption);
        await this.handlePermissions();

        await this.waitForVisible(this.cameraShutterBtn);
        await this.click(this.cameraShutterBtn);
        await this.pause(2000); // Allow camera to process
    }

    async clickVehicleInfoSubmitButton() {
        await this.waitForVisible(this.submitBtn);
        await this.click(this.submitBtn);
    }
}

export default new VehicleInfoPage();

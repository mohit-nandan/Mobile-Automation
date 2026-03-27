import Login from "../../pages/Login";
import OtpPage from "../../pages/OtpPage";
import DocumentListingPage from "../../pages/DocumentListing";
import VehicleInfoPage from "../../pages/VehicleInfo";
import SelectDarkstorePage from "../../pages/SelectDarkstore";
import KYCPage from "../../pages/KYCPage";
import KYCVerificationPage from "../../pages/KYCVerification";
import { getNextPhoneNumber, getRandomLastName } from "../../utils/dataGenerator";


describe('Onboarding Tests', () => {
    it('should verify login button', async () => {
        await Login.clickSignupButton();
        await Login.enterFirstName("Testing");
        await Login.enterLastName(getRandomLastName());
        await Login.enterPhoneNumber(getNextPhoneNumber());
        await Login.clickSubmitButton();
    });

    it('should verify otp page', async () => {
        await OtpPage.GetOtpfromDatabase();
        await OtpPage.enterOtp();
        await OtpPage.clickSubmitButton();
    });

    it('should verify document listing page', async () => {
        await DocumentListingPage.clickProceedDocumentListing();
    });

    it('should verify vehicle info page', async () => {
        await VehicleInfoPage.SelectVehicleOwnerShip();
        await VehicleInfoPage.SelectVehicleType();
        await VehicleInfoPage.uploadRC();
        await VehicleInfoPage.uploadDL();
        await VehicleInfoPage.insuranceUpload();
        await VehicleInfoPage.clickVehicleInfoSubmitButton();
    });

    it('should verify select darkstore page', async () => {
        await SelectDarkstorePage.selectCity();
        await SelectDarkstorePage.selectDarkstore();
        await SelectDarkstorePage.clickSelectDarkstoreSubmitButton();
    });

    it('should verify kyc page', async () => {
        await KYCPage.uploadPanCard();
        await KYCPage.uploadAadhaarFront();
        await KYCPage.uploadAadhaarBack();
        await KYCPage.TypeAdhaarNumber();
        await KYCPage.clickSelfie();
        await KYCPage.clickSubmitButton();
    });

    it('should verify kyc verification page', async () => {
        await KYCVerificationPage.clickApproveButton();
    });

});



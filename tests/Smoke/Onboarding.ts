import Login from "../../pages/Login";
import OtpPage from "../../pages/OtpPage";
import DocumentListingPage from "../../pages/DocumentListing";
import VehicleInfoPage from "../../pages/VehicleInfo";
import SelectDarkstorePage from "../../pages/SelectDarkstore";
import KYCPage from "../../pages/KYCPage";
import KYCVerificationPage from "../../pages/KYCVerification";
import ProfileSetupPage from "../../pages/ProfileSetupPage";
import BankDetailPage from "../../pages/BankDetailPage";
import NominatioPage from "../../pages/NominatioPage";
import TermsAndCondPage from "../../pages/TermsandCondPage";
import { getNextPhoneNumber, getRandomLastName } from "../../utils/dataGenerator";
import LoginOnboardingPage from "../../pages/LoginOnboardingPage";
import onboardingData from "../../utils/Fixtures/staging/onboarding.json";


describe('Onboarding Tests', () => {
    it('should verify login button', async () => {
        await Login.clickSignupButton();
        await Login.enterFirstName(onboardingData.Login.firstName);
        await Login.enterLastName(getRandomLastName());
        await Login.enterPhoneNumber(getNextPhoneNumber());
        await Login.clickSubmitButton();
    });

    it('should verify otp page', async () => {
        await OtpPage.getOtpFromDatabase();
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

    it('Should verify LoginOnboardingPage', async () => {
        await LoginOnboardingPage.LoginWithPhoneNumber();
        await LoginOnboardingPage.enterOtp();
        await LoginOnboardingPage.clickSubmitButton();
    });

    it('should verify profile setup page', async () => {
        await ProfileSetupPage.EnterPincode();
        await ProfileSetupPage.EnterAddress();
        await ProfileSetupPage.clickSubmitButton();
    });

    it('should verify bank detail page', async () => {
        await BankDetailPage.EnterBankDetails();
        await BankDetailPage.clickSubmitButton();
    });

    it('should verify nomination page', async () => {
        await NominatioPage.EnterNomineeDetails();
        await NominatioPage.clickSubmitButton();
    });

    it('should verify terms and conditions page', async () => {
        await TermsAndCondPage.clickTermsAndCondButton();
    });

});



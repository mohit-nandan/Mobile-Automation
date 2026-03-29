import BasePage from "./BasePage";

class DocumentListingPage extends BasePage {

    async clickProceedDocumentListing() {
        await this.waitForVisible('android=new UiSelector().text("Proceed")');
        await this.click('android=new UiSelector().text("Proceed")');
    }

}

export default new DocumentListingPage();
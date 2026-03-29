import BasePage from "./BasePage";

class TermsAndCondPage extends BasePage {

    get checkboxTerms() { return 'android=new UiSelector().className("android.view.ViewGroup").instance(12)'; }
    get acceptBtn() { return 'android=new UiSelector().textContains("Accept")'; }


    async scrollToBottom(maxSwipes = 25) {
        let previousSource = '';
        let currentSource = await driver.getPageSource();

        let count = 0;

        while (previousSource !== currentSource && count < maxSwipes) {
            await this.swipeUp(0.85, 0.15, 150);
            await driver.pause(200);

            previousSource = currentSource;
            currentSource = await driver.getPageSource();

            count++;
        }

        console.log(`Scrolled ${count} times`);
    }

    async clickTermsAndCondButton() {
        await this.scrollToBottom();
        await this.waitForVisible(this.checkboxTerms);
        await this.click(this.checkboxTerms);
        
        await this.waitForClickable(this.acceptBtn);
        await this.click(this.acceptBtn);
    }


}

export default new TermsAndCondPage();
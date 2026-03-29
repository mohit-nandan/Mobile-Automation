import BasePage from "./BasePage";

class SelectDarkstorePage extends BasePage {

    async selectCity() {
        await this.waitForVisible('~Select a City');
        await this.click('~Select a City');
        const element = await $('android=new UiSelector().text("Search City")');
        await this.type(element, 'Delhi');
        await this.click('~Delhi');
    }

    async selectDarkstore() {
        await this.waitForVisible('~Select dark store');
        await this.click('~Select dark store');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("okhla"))');
        await this.click('android=new UiSelector().description("okhla").instance(0)');
    }

    async clickSelectDarkstoreSubmitButton() {
        await this.waitForVisible('~Submit');
        await this.click('~Submit');
    }
}

export default new SelectDarkstorePage();
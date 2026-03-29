import { $ } from '@wdio/globals'
import BasePage from './BasePage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PODPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    public get flashAlert() {
        return $('#flash');
    }
}

export default new PODPage();

import { ResultsPage } from '../Pages/resultsPage';
import { browser } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export = function () {
    let results = new ResultsPage();

    this.Then(/^Sign in button should be displayed$/, () => {
        browser.sleep(2000)
        return expect(results.firstResultLink.isDisplayed()).to.eventually.equal(true);

    });

}

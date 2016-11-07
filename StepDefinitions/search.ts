import { SearchPageObject } from '../Pages/searchPage';

export = function () {
    let search = new SearchPageObject();
    
    this.When(/^I type "(.*?)"$/, (text) => {
        return search.searchTextBox.sendKeys(text);
    });

    this.Then(/^I click on search button$/, () => {
        return search.searchButton.click();
    });

}

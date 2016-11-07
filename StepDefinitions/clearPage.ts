import { SearchPageObject } from '../Pages/searchPage';

export  = function() {
    
    let search = new SearchPageObject();

    this.Then(/^I clear the search text$/, () => {
        return search.searchTextBox.clear();
    });

}
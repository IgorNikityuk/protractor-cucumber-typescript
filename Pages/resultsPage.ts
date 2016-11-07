import { $ } from 'protractor';

export class ResultsPage {
    public firstResultLink:any;

    constructor() {
        this.firstResultLink = $("#gb_70");
    }
}
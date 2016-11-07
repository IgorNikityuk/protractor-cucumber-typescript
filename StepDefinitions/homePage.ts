import { browser } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export = function(){
    
    this.Given(/^I am on google page$/, () => {
        browser.get("http://www.google.com");
        return expect(browser.getTitle()).to.eventually.equal('Google');
    });
}
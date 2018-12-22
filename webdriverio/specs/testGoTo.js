'use strict';

var assert = require('assert');

suite('Going to a site', () => {
   test('Test the Going to a site', () => {
       browser.url('http://webdriver.io');
       var title = browser.getTitle();
       assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });

});

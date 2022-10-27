import { Given, When, Then, And } from '@cucumber/cucumber';
const deelPage = require('../pageobjects/deel.page');
const expectchai = require('chai').expect;

Given(/^navigate to (.+)$/, async (page) => {
  await browser.url(page);
});

When(/^deel page validate page title (.+)$/, async (title) => {
  await expect(browser).toHaveTitle(title);
});

Then(/^select (.+)$/, async (role) => {
  await deelPage.selectionRoleOption(role);
  await browser.pause(5000);
});

Then(/^Select (.+)$/, async (country) => {
  await deelPage.selectCountry(country);
  await browser.pause(8000);
});

Then(/^Place search and verify constains in header (.+)$/, async (country) => {
  await browser.pause(3000);
  await deelPage.searchClick();
  await deelPage.validateHeader(country);
});

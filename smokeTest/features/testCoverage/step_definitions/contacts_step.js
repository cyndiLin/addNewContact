/* eslint-disable func-names */
const { Given, When, Then } = require('cucumber');
const { loginDetails, loginURL, contactDetails } = require('../../support/constants');

Given(/^A user signs into their trial account$/, async function () {
  await this.scenarioContext.page.goto(loginURL);
  await this.scenarioContext.page.type('#email', loginDetails.userName);
  await this.scenarioContext.page.type('#password', loginDetails.password);
  await this.scenarioContext.page.screenshot({ path: 'artifacts/userLogin.png' });
  await this.scenarioContext.page.click('#submitButton');
  await this.scenarioContext.page.waitForSelector('[data-navigation-id="contacts"]');
});

When(/^the user navigate to the All contacts page$/, async function () {
  await this.scenarioContext.page.screenshot({ path: 'artifacts/successfulLogin.png' });
  await this.scenarioContext.page.click('[data-navigation-id="contacts"]');
  await this.scenarioContext.page.click('[data-navigation-id="contacts-all"]');
  await this.scenarioContext.page.waitForSelector('#button-1023-btnEl');
});

Then(/^chooses to add a new contact$/, async function () {
  await this.scenarioContext.page.click('#button-1023-btnEl');
  await this.scenarioContext.page.waitForSelector('#Name');
});

Then(/^the user will enter contact details$/, async function () {
  const date = new Date().toUTCString();
  const formDetails = contactDetails(date);
  await this.scenarioContext.page.type('#Name', formDetails.name);
  await this.scenarioContext.page.type('#FirstName', formDetails.firstName);
  await this.scenarioContext.page.type('#LastName', formDetails.lastName);
  await this.scenarioContext.page.type('#EmailAddress', formDetails.email);
  await this.scenarioContext.page.type('#MobileCountryCode', formDetails.mobileCountry);
  await this.scenarioContext.page.type('#MobileAreaCode', formDetails.mobileArea);
  await this.scenarioContext.page.type('#MobileNumber', formDetails.mobileNumber);
  await this.scenarioContext.page.type('#POAddressFinder', formDetails.postalAddress);
  await this.scenarioContext.page.waitForSelector('.x-combo-list-item.x-combo-selected');
  await this.scenarioContext.page.click('.x-combo-list-item.x-combo-selected');
  await this.scenarioContext.page.waitFor(4000);
  await this.scenarioContext.page.screenshot({ path: 'artifacts/completedForm.png' });
});

Then(/^the user will confirm and save the new contact$/, async function () {
  await this.scenarioContext.page.click('[data-automationid="Save-button"]');
  await this.scenarioContext.page.waitForSelector('.x-crumbs');
  await this.scenarioContext.page.screenshot({ path: 'artifacts/successfulAddContact.png' });
});

Then(/^the user will see the new contact in their contact list$/, async function () {
  await this.scenarioContext.page.click('.x-crumbs');
  await this.scenarioContext.page.waitForSelector('div.details');
  await this.scenarioContext.page.screenshot({ path: 'artifacts/contactListAfterAdd.png' });
});

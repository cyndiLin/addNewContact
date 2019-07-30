/* eslint-disable func-names */
/* eslint-disable no-console */
const { Before, After } = require('cucumber');
const puppeteer = require('puppeteer');

// launch puppeteer browser before test run
Before({ tags: '@smoke' }, async function () {
  try {
    this.scenarioContext.browser = await puppeteer.launch({ headless: false });
    this.scenarioContext.page = await this.scenarioContext.browser.newPage();
    await this.scenarioContext.page.setViewport({ width: 1901, height: 970 });
    console.log('Puppeteer browser launched');
  } catch (error) {
    throw error;
  }
});

// close puppeteer browser after test run
After({ tags: '@smoke' }, async function () {
  try {
    await this.scenarioContext.browser.close();
    console.log('browser is closed');
  } catch (error) {
    throw error;
  }
});

# Cyndi Lin's smoke test framework for Xero 
This is a Javascript test framework set up with cucumberjs and using puppeteer to drive the chrome browser.

There is one feature set up to verify adding one contact to a trial user account. 

The gherkin can be located under smokeTest/features/testCoverage/features

# How to run
After cloning first run npm install to download all project dependencies

Run npm run test to execute the test case

# Artifacts
There are additional screenshot functions added to create artifacts for the purpose of this exercise, these can be viewed after each run under the artifacts folder.

I have also set up the headless browser to be headless: false in this case for a visual of the progress. This can be changed back to headless by removing headless: false
in hooks.js under smokeTest/features/support
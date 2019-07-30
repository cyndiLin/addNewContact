const { setDefaultTimeout, setWorldConstructor } = require('cucumber');

// create a scenarioContext object that is unique to each feature.
// variables stored in scenarioContext can be shared between hooks and steps under the same feature
class CustomWorld {
  constructor() {
    this.scenarioContext = {
    };
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(420000);

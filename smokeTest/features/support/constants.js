const loginDetails = {
  userName: 'cyndi.lin92@gmail.com',
  password: 'Test1234!',
};

const loginURL = 'https://login.xero.com/';

const contactDetails = date => ({
  name: `Test Contact ${date}`,
  firstName: 'Cyndi',
  lastName: 'Lin',
  email: 'cyndi.lin92@gmail.com',
  mobileCountry: '64',
  mobileArea: '21',
  mobileNumber: '1501916',
  postalAddress: '29 Kilkelly Ave',
});

module.exports = {
  loginDetails,
  loginURL,
  contactDetails,
};

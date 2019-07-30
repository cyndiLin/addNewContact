Feature: A user should be able to navigate to the Contacts page to add a new contact

  @smoke
  Scenario: A user will signin and navigate to the Contacts page and successfully enter details and create a new contact

    Given A user signs into their trial account
    When the user navigate to the All contacts page
      And chooses to add a new contact
    Then the user will enter contact details
      And the user will confirm and save the new contact
    Then the user will see the new contact in their contact list



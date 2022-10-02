Feature: Sign Up page

  Background:
    Given A user opens telnyx website on the sign up page

    Scenario: Registration with empty credentials
    When Click on "submit" 
    Then The error message should be given to user as "This field is required."

    Scenario: Registration with correct credentials
    When Enter correct data
    Then See message 

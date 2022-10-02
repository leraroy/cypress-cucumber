Feature: Main page

  Background:
    Given A user opens telnyx website

  Scenario: See all button menu on the main page
    When I click open menu button
    Then See all button menu on the main page

  Scenario: See Sign up page, after click on "Sign up"
    When I click on Sign up
    Then See "Sign Up" page

  Scenario: Show email on register page, after enter email on main page
    When I enter email
    And Click on "Try For Free"
    Then See email on the "Sign Up" page
    And See right email on the register page

  Scenario: Show Contact page after click on "Talk to an expert
    When I click open menu
    And Click on "Talk to an expert" button
    Then See "Contact" page

  Scenario: Show right href, after move to Products
    When I click open menu
    And Click on "Products" button
    Then See all href Products on the main page

  Scenario: Show right href, after move to Pricing
    When I click open menu
    And Click on "Pricing" button
    Then See all href Pricing on the main page

  Scenario: See Documentation page, after click on "Developer Docs"
    When Click on "Developer" link
    Then See "Developers" page

  Scenario: See Facebook page, after click on "Follow on Facebook"
    When Click on "Facebook" link
    Then See "Facebook" page

  Scenario: See LinkedIn page, after click on "Connect on LinkedIn"
    When Click on "LinkedIn" link
    Then See "LinkedIn" page

  Scenario: See Twitter page, after click on "Follow on Twitter"
    When Click on "Twitter" link
    Then See "Twitter" page


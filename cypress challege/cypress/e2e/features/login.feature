Feature: Login Test

  Scenario: Successful Login
    Given opens the login page
    When the user enters "standard_user" as the username
    And the user enters "secret_sauce" as the password
    And the user clicks the login button
    Then the login should be successful
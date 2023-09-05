Feature: Item Sorting Test

  Scenario: Verify items are sorted by Name (A -> Z)
    Given the user is logged in
    When the user selects sorting by Name (A -> Z)
    Then the items should be sorted by Name (A -> Z)

  Scenario: Change sorting to Name (Z -> A)
    Given the user is logged in
    When the user selects sorting by Name (Z -> A)
    Then the items should be sorted by Name (Z -> A)

  Scenario: Verify items are sorted correctly
    Given the user is logged in
    When the user selects sorting by Name (A -> Z)
    And the user selects sorting by Name (Z -> A)
    Then the items should be sorted correctly
@envall @homepage @priority @amazon
Feature: Homepage Tests

  As a user
  I can see and use homepage functions to search and purchase items of My interest

  Background:
    Given I land on amazon homepage

  @envall
  Scenario: Amazon logo link and search results field is present on homepage
    Then I should see amazon logo with link
    And I should see search results field with search button

  @priority @envall
  Scenario Outline: Verify user can perform search items from the search field in homepage
    When I enter a search item text as "<searchKeyword>" in the input field
    And I click on the submit search button
    Then I should see the correct search results list displayed

    Examples:
      | searchKeyword |
      | 1             |

  @priority @envall
  Scenario Outline: Verify user can perform search items from the search field in homepage
    When I enter a search item text as "<searchKeyword>" in the input field
    And I click on the submit search button
    And I select a random item from the search list page
    Then I see the detail page opened for the selected item

    Examples:
      | searchKeyword |
      | 1             |

  @priority @envall
  Scenario Outline: Verify user can search for an item and add to cart
    When I enter a search item text as "<searchKeyword>" in the input field
    And I click on the submit search button
    And I select a random item from the search list page
    And I click on add to cart button from the selected items detail page
    Then I should get the item added to my cart as expected

    Examples:
      | searchKeyword |
      | 1             |

  @priority @envall
  Scenario Outline: Verify user can proceed to checkout and purchase the item selected
    And I enter a search item text as "<searchKeyword>" in the input field
    And I click on the submit search button
    And I select a random item from the search list page
    And I click on add to cart button from the selected items detail page
    And I click on proceed to checkout button from added to cart detail page
    And I login to my account with "<username>" and "<password>"
    And I enter details of my card in the fields to make purchase
    When I click submit to purchase button
    Then I should see a success message with correct purchase details

    Examples:
      | searchKeyword | username      | password |
      | 1             | xyz@gmail.com | test551  |
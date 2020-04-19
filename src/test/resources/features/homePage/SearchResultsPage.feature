#@envall @homepage @priority @amazon
#Feature: Search List Page Tests
#
#  As a user
#  I can select the items searched and purchase from the search list page
#
#  Background:
#    Given I land on amazon homepage
#
#  @priority @envall @amazon11
#  Scenario Outline: Verify user can select the items from searched page
#    When I enter a search item text as "<searchKeyword>" in the input field
#    And I click on the submit search button
#    And I select a random item from the search list page
#    Then I see the detail page opened for the selected item
#
#
#    Examples:
#      | searchKeyword   |
#      | Sony 55 inch TV |
Feature: Pages

@user1 @web
Scenario: Create a new page
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  Then I wait for 7 seconds
  And I click on pages
  And I wait for 2 seconds
  And I click on new page
  And I wait for 2 seconds
  And I type a page title "Kraken Test Page"
  And I wait for 2 seconds
  And I type a page body "This page has been created by Kraken."
  And I wait for 2 seconds
  And I click on publish menu
  And I wait for 2 seconds
  And I click on publish button
  And I wait for 2 seconds
  And I click on pages
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/kraken-test-page"
  And I assert page with title "Kraken Test Page" exists
  And I wait for 5 seconds

Feature: Pages

@user1 @web
Scenario: Delete a created page
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
  And I type a page title "Kraken Deletable Page"
  And I wait for 2 seconds
  And I type a page body "This page will be deleted by Kraken."
  And I wait for 2 seconds
  And I click on publish menu
  And I wait for 2 seconds
  And I click on publish button
  And I wait for 2 seconds
  And I click on pages
  And I wait for 2 seconds
  And I open the first page on the list
  And I wait for 2 seconds
  And I click on the page menu
  And I wait for 2 seconds
  And I click on the delete page button
  And I wait for 2 seconds
  And I click on the confirmation delete page button
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/kraken-deletable-page"
  And I assert 404 error code with page name appears
  And I wait for 5 seconds

Feature: Pages

@user1 @web
Scenario: Unpublish a page
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
  And I type a page title "Kraken Unpublish Page"
  And I wait for 2 seconds
  And I type a page body "This page will be unpublished by Kraken."
  And I wait for 2 seconds
  And I click on publish menu
  And I wait for 2 seconds
  And I click on publish button
  And I wait for 2 seconds
  And I click on pages
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/kraken-unpublish-page"
  And I wait for 5 seconds
  And I assert page with title "Kraken Unpublish Page" exists
  And I open the first page on the list
  And I wait for 2 seconds
  And I click on publish menu
  And I wait for 2 seconds
  And I click on the unplublish radio button
  And I wait for 2 seconds
  And I click on publish button
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/kraken-unpublish-page"
  And I wait for 5 seconds
  And I assert 404 error code appears
  And I wait for 5 seconds

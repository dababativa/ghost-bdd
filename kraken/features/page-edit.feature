Feature: Editar un  post

@user1 @web
Scenario: Se crea un nuevo post
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
  And I type a page title "Kraken Editable Page"
  And I wait for 2 seconds
  And I type a page body "This page is going to be created and edited by Kraken."
  And I wait for 2 seconds
  And I click on publish menu
  And I wait for 2 seconds
  And I click on publish button
  And I wait for 2 seconds
  And I click on pages
  And I wait for 2 seconds
  And I open the first page on the list
  And I wait for 2 seconds
  And I type a page title "Kraken Edited Page"
  And I wait for 2 seconds
  And I type a page body "This a edited page by Kraken."
  And I wait for 2 seconds
  And I click on publish menu
  And I wait for 2 seconds
  And I click on publish button
  And I wait for 2 seconds
  And I click on pages
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/kraken-editable-page"
  And I assert page with title "Kraken Edited Page" exists
  And I wait for 5 seconds



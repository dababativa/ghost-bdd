Feature: programar un post

@user1 @web
Scenario: Se programa post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  Then I wait for 7 seconds
  And I click posts
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I type a title "Post para programar"
  And I wait for 2 seconds
  And I write a body "Body programado"
  And I wait for 2 seconds
  And I click to publish
  And I wait for 2 seconds
  And I open calendar
  And I wait for 2 seconds
  And I select a date
  And I wait for 2 seconds
  And I publish the post
  And I wait for 2 seconds
  And I click confirm
  And I wait for 2 seconds
  And I back to posts list
  And I wait for 3 seconds
  And I click scheduled
  And I wait for 5 seconds

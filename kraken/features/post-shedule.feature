Feature: Manejo de posts

@user1 @web
<<<<<<< HEAD
Scenario: Se programa un post
=======
Scenario: Se programa post
>>>>>>> 0f90e44bd0099b5d745df31f7e3a8c999b645b26
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

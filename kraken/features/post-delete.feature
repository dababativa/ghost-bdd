Feature: Manejo de posts

@user1 @web
Scenario: Se elimina un post
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
  And I click a post
  And I wait for 2 seconds  
  And I click settings
  And I wait for 2 seconds
  And I delete the post
  And I wait for 2 seconds  
  And I confirm delete
  And I wait for 5 seconds
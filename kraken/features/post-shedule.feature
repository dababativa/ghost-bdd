Feature: Crear un nuevo post

@user1 @web
Scenario: Se crea un nuevo post
  Given I am using version "<VERSION>"
  And I navigate to ghost on port "<PORT>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  Then I wait for 7 seconds
  And I click posts
  And I wait for 2 seconds
  And I take a post Screenshot "schedule/1-post-list"
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I type a title "Post para programar"
  And I wait for 2 seconds
  And I write a body "Body programado"
  And I wait for 2 seconds
  And I click to publish
  And I wait for 2 seconds
  And I take a post Screenshot "schedule/2-post-to-publish"
  And I wait for 2 seconds
  And I open calendar
  And I wait for 2 seconds
  And I select a date
  And I wait for 2 seconds
  And I take a post Screenshot "schedule/3-post-date"
  And I wait for 2 seconds
  And I publish the post
  And I wait for 2 seconds
  And I click confirm
  And I wait for 2 seconds
  And I take a post Screenshot "schedule/4-post-schediled"
  And I wait for 2 seconds
  And I back to posts list
  And I wait for 2 seconds
  And I take a post Screenshot "schedule/5-post-list"
  And I wait for 3 seconds
  And I click scheduled
  And I wait for 2 seconds
  And I take a post Screenshot "schedule/6-post-sceduled-list"
  And I wait for 2 seconds
  And I assert post "Post para programar" exist
  And I wait for 5 seconds
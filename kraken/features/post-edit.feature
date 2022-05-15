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
  And I click posts
  And I wait for 2 seconds
  And I take a post Screenshot "edit/1-post-list"
  And I wait for 2 seconds
  And I click a post
  And I wait for 2 seconds
  And I take a post Screenshot "edit/2-post-non-edited"
  And I wait for 2 seconds
  And I type a title "Post de prueba 1.1"
  And I wait for 2 seconds
  And I write a body "Body de prueba Editado"
  And I wait for 2 seconds
  And I take a post Screenshot "edit/3-post-edited"
  And I wait for 2 seconds
  And I click to publish
  And I wait for 2 seconds
  And I publish the post
  And I wait for 2 seconds
  And I take a post Screenshot "edit/4-post-updated"
  And I wait for 2 seconds
  And I assert post was edited with "Post de prueba 1.1"
  And I wait for 2 seconds
  And I back to posts list
  And I wait for 2 seconds
  And I take a post Screenshot "edit/5-post-list"
  And I wait for 5 seconds
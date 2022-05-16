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
  And I take a post Screenshot "create/1-post-list"
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I type a title "Post de prueba 1"
  And I wait for 2 seconds
  And I write a body "Body de prueba"
  And I wait for 2 seconds
  And I click to publish
  And I wait for 2 seconds
  And I take a post Screenshot "create/2-post-to-create"
  And I wait for 2 seconds
  And I publish the post
  And I wait for 2 seconds
  And I take a post Screenshot "create/3-post-confirm-creation"
  And I wait for 2 seconds
  And I click confirm
  And I wait for 2 seconds
  And I back to posts list
  And I wait for 2 seconds
  And I take a post Screenshot "create/4-post-list-created"
  And I wait for 2 seconds
  And I navigate to post "Post-de-prueba-1"
  And I take a post Screenshot "create/5-post-created"
  And I wait for 2 seconds
  And I assert post with title "Post de prueba 1" exists
  And I wait for 5 seconds
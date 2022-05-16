Feature: Eliminar un post

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
  And I take a post Screenshot "delete/1-post-list"
  And I click new post
  And I wait for 2 seconds
  And I type a title "Post de prueba 2"
  And I wait for 2 seconds
  And I write a body "Body de prueba 2"
  And I wait for 2 seconds
  And I click to publish
  And I wait for 2 seconds
  And I take a post Screenshot "delete/2-post-created"
  And I wait for 2 seconds
  And I publish the post
  And I wait for 2 seconds
  And I click confirm
  And I wait for 2 seconds
  And I navigate to post "Post-de-prueba-2"
  And I wait for 2 seconds
  And I take a post Screenshot "delete/3-post-exist"
  And I wait for 2 seconds
  And I navigate to post list 
  And I wait for 2 seconds
  And I take a post Screenshot "delete/4-post-list"
  And I wait for 2 seconds
  And I click a post
  And I wait for 2 seconds
  And I take a post Screenshot "delete/5-view-post"
  And I wait for 2 seconds  
  And I click settings
  And I wait for 2 seconds
  And I take a post Screenshot "delete/6-post-settings"
  And I wait for 2 seconds
  And I delete the post
  And I wait for 2 seconds
  And I take a post Screenshot "delete/7-post-delete-option"
  And I wait for 2 seconds  
  And I confirm delete  
  And I wait for 2 seconds
  And I take a post Screenshot "delete/8-post-deleted"
  And I wait for 2 seconds
  And I navigate to post "http://localhost:2368/Post-de-prueba-2"
  And I wait for 2 seconds
  And I take a post Screenshot "delete/9-post-not-exist"
  And I wait for 2 seconds
  And I assert post does no exist
  And I wait for 5 seconds
Feature: Crear y editar un tag

@user1 @web
Scenario: Como ususario entro y creo un tag y lo modifico
  Given I am using version "<VERSION>"
  And I navigate to ghost on port "<GHOST_PORT>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  Then I wait for 7 seconds
  And I click tags
  And I wait for 2 seconds
  And I click create tag
  And I wait for 2 seconds
  And I type tag name "Tagname2"
  And I wait for 2 seconds
  And I type tag slug "Tagslug2"
  And I wait for 2 seconds
  And I type tag description "Tagdescription2"
  And I wait for 2 seconds
  And I click save tag
  And I wait for 2 seconds
  And I click tags
  And I wait for 2 seconds
  And I open the tag with slug "tagname2tagslug2"
  And I wait for 2 seconds
  And I type tag name "Tag name editado"
  And I wait for 2 seconds
  And I type tag slug "Tag slug editado"
  And I wait for 2 seconds
  And I type tag description "Tag description editado"
  And I wait for 2 seconds
  And I click save tag
  And I wait for 2 seconds
  And I click tags
  And I wait for 2 seconds
  And I assert tag with slug "tagname2tagslug2" does not exist
  And I assert tag with slug "tag-slug-editado" exists
  And I wait for 5 seconds

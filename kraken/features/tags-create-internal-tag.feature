Feature: Crear tag interno

@user1 @web
Scenario: Como ususario entro y creo un tag interno
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
  And I navigate to page "http://localhost:2368/ghost/#/tags?type=internal"
  And I wait for 2 seconds
  And I click create tag
  And I wait for 2 seconds
  And I type tag name "#internalTag"
  And I wait for 2 seconds
  And I type tag slug "slug"
  And I wait for 2 seconds
  And I type tag description "Descripción del tag"
  And I wait for 2 seconds
  And I click save tag
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags?type=internal"
  And I assert tag with slug "hash-internaltagslug" exists
  And I wait for 5 seconds
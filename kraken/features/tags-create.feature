Feature: Crear tag

@user1 @web
Scenario: Como ususario entro y creo un tag
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
  And I type tag name "Tagname"
  And I wait for 2 seconds
  And I type tag slug "Tagslug"
  And I wait for 2 seconds
  And I type tag description "Tagdescription"
  And I wait for 2 seconds
  And I click save tag
  And I wait for 2 seconds
  And I click tags
  And I wait for 1 seconds
  And I assert tag with slug "tagnametagslug" exists
  And I wait for 5 seconds
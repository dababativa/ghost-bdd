Feature: Crear tag

@user1 @web
Scenario: Como ususario entro a los tags del admin de ghost
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
  And I wait for 5 seconds
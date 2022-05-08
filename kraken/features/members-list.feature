Feature: Lista Members

@user1 @web
Scenario: Como ususario inicio sesion en el admin de ghost
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  Then I wait for 5 seconds
  And I click members
  Then I wait for 10 seconds
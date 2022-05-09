Feature: Eliminar Members

@user1 @web
Scenario: Como usuario inicio sesion en el admin de ghost y elimino un miembro del sistema
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click next
  Then I wait for 5 seconds
  And I click members
  And I wait for 5 seconds
  And I click new-member
  Then I wait for 5 seconds
  And I enter member-name "$name_1"
  And I wait for 1 seconds
  And I enter member-email "testeliminado@test.com"
  And I wait for 1 seconds
  And I enter member-labels "$name_1"
  And I wait for 1 seconds
  And I enter member-note "$name_1"
  And I wait for 1 seconds
  And I click save-member
  Then I wait for 5 seconds
  And I click members
  And I wait for 3 seconds
  And I click recent-member
  And I wait for 3 seconds
  And I click member-options
  And I wait for 2 seconds
  And I click delete-member
  Then I wait for 3 seconds
  And I confirm delete-member
  Then I wait for 3 seconds
  And I click members
  And I wait for 2 seconds
  And I assert member eliminado "testeliminado@test.com" exists
  And I wait for 5 seconds
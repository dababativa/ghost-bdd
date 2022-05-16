Feature: Eliminar Members

@user1 @web
Scenario: Como usuario inicio sesion en el admin de ghost y elimino un miembro del sistema
  Given I am using version "<VERSION>"
  And I navigate to ghost on port "<GHOST_PORT>"
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click next
  Then I wait for 5 seconds
  And I enable members1
  And I wait for 4 seconds
  And I enable members2
  And I wait for 4 seconds
  And I enable members3
  And I wait for 4 seconds
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
  And I take member-delete screenshot1
  And I wait for 1 seconds
  And I click save-member
  Then I wait for 5 seconds
  And I click members
  And I wait for 3 seconds
   And I take member-delete screenshot2
  And I wait for 1 seconds
  And I click recent-member
  And I wait for 3 seconds
  And I click member-options
  And I wait for 2 seconds
  And I click delete-member
   And I take member-delete screenshot3
  And I wait for 1 seconds
  Then I wait for 3 seconds
  And I confirm delete-member
  Then I wait for 3 seconds
  And I click members
  And I take member-delete screenshot4
  And I wait for 1 seconds
  And I wait for 2 seconds
  And I assert member eliminado "testeliminado@test.com" exists
  And I wait for 5 seconds
  And I enable members1
  And I wait for 4 seconds
  And I enable members2
  And I wait for 4 seconds
  And I enable members3
  And I wait for 4 seconds
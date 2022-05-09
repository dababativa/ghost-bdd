Feature: Show Member

@user1 @web
Scenario: Como usuario inicio sesion en el admin de ghost y veo un miembro creado en el sistema
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
  And I enter member-email "$email_1"
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
  And I wait for 10 seconds
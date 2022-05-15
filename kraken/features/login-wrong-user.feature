Feature: Iniciar Sesion usuario errado

@user1 @web
Scenario: Se incia sesion con un usuario no registrado
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<WRONG_USER>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I take a login Screenshot "login-screen3"
  And I assert error message "There is no user with that email address."
  And I wait for 7 seconds
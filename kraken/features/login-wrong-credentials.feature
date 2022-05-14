# Feature: Iniciar Sesion con credenciales equivocadas

# @user1 @web
# Scenario: Como ususario inicio sesion en el admin de ghost con la contraseña equivocada
#   Given I navigate to page "http://localhost:2368/ghost/#/signin"
#   And I wait for 5 seconds
#   When I enter email "<USERNAME1>"
#   And I wait for 2 seconds
#   And I enter password "CONTRASEÑAEQUIVOCADA"
#   And I wait for 2 seconds
#   And I click next
#   And I wait for 2 seconds
#   And I assert wrong password error message
#   And I wait for 7 seconds


Feature: Crear tag

@user1 @web
Scenario: Como ususario entro y creo un tag
  Given I am using version "<VERSION>"
  And I navigate to page "http://localhost:3002/ghost/#/signin"
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

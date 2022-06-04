Feature: Crear y eliminar tag

@user1 @web
Scenario: Como ususario entro y creo un tag y lo elimino
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
  And I type tag name "Eliminar"
  And I wait for 2 seconds
  And I type tag slug "Eliminar"
  And I wait for 2 seconds
  And I type tag description "Descripción que se eliminará después"
  And I wait for 2 seconds
  And I click save tag
  And I wait for 2 seconds
  And I click tags
  And I wait for 2 seconds
  And I open the tag with slug "eliminareliminar"
  And I wait for 2 seconds
  And I click delete current tag
  And I wait for 2 seconds
  And I cancel deleting tag
  And I wait for 2 seconds
  And I click delete current tag
  And I wait for 2 seconds
  And I confirm deleting tag
  And I wait for 5 seconds
  And I assert tag with slug "eliminareliminar" does not exist
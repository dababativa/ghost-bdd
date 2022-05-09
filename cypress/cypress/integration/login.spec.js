import { LoginPage } from './pages'

describe('Login Functionalities', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('login_url'))
        self.loginPage = new LoginPage();
        cy.wait(3000)
    })
    it('Test login', () => {
        self.loginPage.typeEmail(Cypress.env('username'))
        cy.wait(2000)
        self.loginPage.typePassword(Cypress.env('password'))
        cy.wait(2000)
        self.loginPage.clickLoginButton()
        cy.wait(5000)
    })

    it('Test wrong user login', () => {
        self.loginPage.typeEmail(Cypress.env('wrong_user'))
        cy.wait(2000)
        self.loginPage.typePassword(Cypress.env('wrong_password'))
        cy.wait(2000)
        self.loginPage.clickLoginButton()
    })
    it('Test login wrong credentials', () => {
        self.loginPage.typeEmail(Cypress.env('wrong_user'))
        cy.wait(2000)
        self.loginPage.typePassword(Cypress.env('wrong_password'))
        cy.wait(2000)
        self.loginPage.clickLoginButton()
        cy.wait(2000)
        cy.get('p.main-error').contains('Your password is incorrect.').should('exist');
        cy.wait(5000)
    })

})
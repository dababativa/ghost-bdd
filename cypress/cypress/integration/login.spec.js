import { LoginPage } from './pages'

describe('Testing basic Angular registration', () => {
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
        self.loginPage.typeEmail(Cypress.env('wrongUsername'))
        cy.wait(2000)
        self.loginPage.typePassword(Cypress.env('password'))
        cy.wait(2000)
        self.loginPage.clickLoginButton()
        cy.wait(5000)
    })

})
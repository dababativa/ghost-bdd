import { LoginPage } from './pages'
var gversion = '';

describe('Login Functionalities', () => {
    beforeEach(() => {
        gversion = Cypress.env('ghost_version');
        cy.visit(Cypress.env('login_url'))
        cy.wait(3000)
    })

    it('Test login empty fields', () => {
        const selector = gversion == '4.42' ? 'button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view' : 'button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view'
        cy.get(selector).click()
        cy.wait(300)
    });

    it('Test login wrong data', () => {
        self.loginPage = new LoginPage();
        self.loginPage.typeEmail('wrong_user')
        cy.wait(2000)
        self.loginPage.typePassword('wrong_password')
        cy.wait(2000)
        self.loginPage.clickLoginButton()
        cy.wait(5000)
    })

    it('Test login', () => {
        self.loginPage = new LoginPage();
        self.loginPage.typeEmail(Cypress.env('username'))
        cy.wait(2000)
        self.loginPage.typePassword(Cypress.env('password'))
        cy.wait(1000)
        cy.screenshot('login-screen-'+gversion, {overwrite: false})
        cy.wait(2000)
        self.loginPage.clickLoginButton()
        cy.wait(5000)
    })

})
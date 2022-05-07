export default class LoginPage {

    constructor() {
    }

    getEmailInput() {
        return cy.get("#ember7")
    }
    getPasswordInput() {
        return cy.get("#ember9")
    }
    getLoginButton() {
        return cy.get("#ember11")
    }
    typeEmail(email) {
        return this.getEmailInput().type(email)
    }
    typePassword(password) {
        return this.getPasswordInput().type(password)
    }
    clickLoginButton() {
        return this.getLoginButton().click()
    }
}
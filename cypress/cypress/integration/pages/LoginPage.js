var version = Cypress.env('ghost_version');
export default class LoginPage {

    constructor() {      
    }

    getEmailInput() {      
        const selector = version == '4.42' ? 'input.email.ember-text-field' : 'input.email.ember-text-field.gh-input.ember-view'
        return cy.get(selector)
    }
    getPasswordInput() {
        const selector = version == '4.42' ? 'input.password.ember-text-field' : 'input.password.ember-text-field.gh-input.ember-view'
        return cy.get(selector)
    }
    getLoginButton() {
        const selector = version == '4.42' ? 'button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view' : 'button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view'
        return cy.get(selector)
    }
    typeEmail(email) {
        return this.getEmailInput().focus().blur().type(email)
    }
    typePassword(password) {
        return this.getPasswordInput().type(password)
    }
    clickLoginButton() {
        return this.getLoginButton().click()
    }

    login(email, password) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLoginButton();
    }
}
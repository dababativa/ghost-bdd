export default class LoginPage {
  constructor() {}

  getEmailInput() {
    return cy.get("input.email.ember-text-field");
  }
  getPasswordInput() {
    return cy.get("input.password.ember-text-field");
  }
  getLoginButton() {
    return cy.get("button[type='submit']");
  }
  typeEmail(email) {
    return this.getEmailInput().type(email);
  }
  typePassword(password) {
    return this.getPasswordInput().type(password);
  }
  clickLoginButton() {
    return this.getLoginButton().click();
  }

  login(email, password) {
    this.typeEmail(email);
    this.typePassword(password);
    this.clickLoginButton();
  }
}

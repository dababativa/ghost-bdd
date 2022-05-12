import { LoginPage } from './pages'

describe('Testing members Management', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('login_url'))
        self.loginPage = new LoginPage();
        loginPage.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000);
    })

    //Every it element is the 'then' of the Given-then-when process

    it('Test create member', () => {
        cy.get(".relative>a[href='#/members/'].ember-view").click()
        cy.wait(1000)
        cy.get("a[href='#/members/new/'].ember-view.gh-btn.gh-btn-primary").click()
        cy.wait(3000)
        cy.get("#member-name").click()
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        cy.get("#member-name").type(text, {force: true})
        cy.wait(1000)
        cy.get("#member-email").click()
        cy.get("#member-email").type(text+'@pruebas.com', {force: true})
        cy.wait(1000)
        cy.get(".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input").click()
        cy.get(".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input").type('Label nueva', {force: true})
        cy.wait(1000)
        cy.get("#member-note").click()
        cy.get("#member-note").type('Nota nueva', {force: true})
        cy.wait(1000)
        cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click()
        cy.wait(5000)
        cy.get(".relative>a[href='#/members/'].ember-view").click()
        cy.wait(10000)
    })

    it('Test Edit Member', () => {
        cy.get(".relative>a[href='#/members/'].ember-view").click()
        cy.wait(1000)
        cy.get("a[href='#/members/new/'].ember-view.gh-btn.gh-btn-primary").click()
        cy.wait(3000)
        cy.get("#member-name").click()
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        cy.get("#member-name").type(text, {force: true})
        cy.wait(1000)
        cy.get("#member-email").click()
        cy.get("#member-email").type(text+'@pruebas.com', {force: true})
        cy.wait(1000)
        cy.get(".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input").click()
        cy.get(".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input").type('Label nueva', {force: true})
        cy.wait(1000)
        cy.get("#member-note").click()
        cy.get("#member-note").type('Nota nueva', {force: true})
        cy.wait(1000)
        cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click()
        cy.wait(3000)
        cy.get(".relative>a[href='#/members/'].ember-view").click()
        cy.wait(2000)
        cy.contains('.ma0.pa0.gh-members-list-name:first-child', text).click()
        cy.wait(5000)
        cy.get("#member-note").click()
        cy.get("#member-note").type(' Nota editada', {force: true})
        cy.wait(2000)
        cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click()
        cy.wait(3000)
        cy.get(".relative>a[href='#/members/'].ember-view").click()
        cy.wait(7000)
    })

    it('Test Show member', () => {
        cy.get(".relative>a[href='#/members/'].ember-view").click()
        cy.wait(1000)
        cy.get("a[href='#/members/new/'].ember-view.gh-btn.gh-btn-primary").click()
        cy.wait(3000)
        cy.get("#member-name").click()
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        cy.get("#member-name").type(text, {force: true})
        cy.wait(1000)
        cy.get("#member-email").click()
        cy.get("#member-email").type(text+'@pruebas.com', {force: true})
        cy.wait(1000)
        cy.get(".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input").click()
        cy.get(".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input").type('Label nueva', {force: true})
        cy.wait(1000)
        cy.get("#member-note").click()
        cy.get("#member-note").type('Nota nueva', {force: true})
        cy.wait(1000)
        cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click()
        cy.wait(3000)
        cy.get(".relative>a[href='#/members/'].ember-view").click()
        cy.wait(2000)
        cy.contains('.ma0.pa0.gh-members-list-name:first-child', text).click()
        cy.wait(7000)
    })

    it('Test delete member', () => {
        cy.get(".relative>a[href='#/members/'].ember-view").click()
        cy.wait(1000)
        cy.get("a[href='#/members/new/'].ember-view.gh-btn.gh-btn-primary").click()
        cy.wait(3000)
        cy.get("#member-name").click()
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        cy.get("#member-name").type(text, {force: true})
        cy.wait(1000)
        cy.get("#member-email").click()
        cy.get("#member-email").type(text+'@pruebas.com', {force: true})
        cy.wait(1000)
        cy.get(".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input").click()
        cy.get(".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input").type('Label nueva', {force: true})
        cy.wait(1000)
        cy.get("#member-note").click()
        cy.get("#member-note").type('Nota nueva', {force: true})
        cy.wait(1000)
        cy.get("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click()
        cy.wait(3000)
        cy.get(".relative>a[href='#/members/'].ember-view").click()
        cy.wait(2000)
        cy.contains('.ma0.pa0.gh-members-list-name:first-child', text).click()
        cy.wait(3000)
        cy.get(".gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view").click()
        cy.wait(2000)
        cy.get("ul.dropdown.gh-member-actions-menu.dropdown-menu.dropdown-triangle-top-right.open.fade-in-scale.open.ember-view>li>button.mr2>span.red").click()
        cy.wait(2000)
        cy.get("div.modal-footer>button.gh-btn.gh-btn-red.gh-btn-icon.ember-view").click()
        cy.wait(5000)
        cy.get('h3').contains(text).should('not.exist');
        cy.wait(5000)
    })
})
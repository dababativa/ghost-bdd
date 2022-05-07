import { AdminPage, LoginPage, TagsPage } from './pages'

describe('Testing basic Angular registration', () => {
    before(() => {
        cy.visit(Cypress.env('login_url'))
        const loginPage = new LoginPage();
        loginPage.login(Cypress.env('username'), Cypress.env('password'))
        cy.wait(3000)
    })

    beforeEach(() => {
        cy.visit(Cypress.env('admin_url'))
        self.adminPage = new AdminPage();
        self.tagsPage = new TagsPage();
        cy.wait(3000);
        self.adminPage.clickTagsButton();
        cy.wait(3000);
    })
    it('Test create tag', () => {
        self.tagsPage.clickCreateTagButton();
        cy.wait(3000);
        self.tagsPage.typeTagName('New tag name');
        self.tagsPage.typeTagSlug('newTagSlug');
        self.tagsPage.typeTagDescription('This is the description of a new tag created using cypress');
        self.tagsPage.clickSaveTagButton();
        self.adminPage.clickTagsButton();
    })

})
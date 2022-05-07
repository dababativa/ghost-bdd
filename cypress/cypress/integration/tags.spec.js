import { AdminPage, LoginPage, TagsPage } from './pages'

describe('Testing basic Angular registration', () => {

    before(() => {
        cy.visit(Cypress.env('login_url'))
        self.loginPage = new LoginPage();
        loginPage.login(Cypress.env('username'), Cypress.env('password'))
        self.adminPage = new AdminPage();
        self.tagsPage = new TagsPage();
        cy.wait(3000);
        self.adminPage.clickTagsButton();
        cy.wait(1000);
        self.tagsPage.deleteAllExistingTags();
        cy.wait(1000);
        self.adminPage.signOut();

    })

    beforeEach(() => {
        cy.visit(Cypress.env('login_url'))
        self.loginPage.login(Cypress.env('username'), Cypress.env('password'))
        cy.wait(2000);
        self.adminPage.clickTagsButton();
        cy.wait(2000);
    })
    it('Test create tag', () => {
        self.tagsPage.clickCreateTagButton();
        cy.wait(1000);
        self.tagsPage.typeTagName('New tag name');
        cy.wait(1000);
        self.tagsPage.typeTagSlug('newTagSlug');
        cy.wait(1000);
        self.tagsPage.typeTagDescription('This is the description of a new tag created using cypress');
        cy.wait(1000);
        self.tagsPage.clickSaveTagButton();
        cy.wait(1000);
        self.adminPage.clickTagsButton();
        cy.wait(5000);
    })

    it('Test create delete tag', () => {
        self.tagsPage.clickCreateTagButton();
        cy.wait(1000);
        self.tagsPage.typeTagName('Deletable tag');
        cy.wait(1000);
        self.tagsPage.typeTagSlug('slug');
        cy.wait(1000);
        self.tagsPage.typeTagDescription('This is the description of a new tag created that will then be deleted using cypress');
        cy.wait(1000);
        self.tagsPage.clickSaveTagButton();
        cy.wait(1000);
        self.adminPage.clickTagsButton();
        cy.wait(1000);
        self.tagsPage.openTagWithSlug('slug');
        cy.wait(1000);
        self.tagsPage.clickDeleteTagButton();
        cy.wait(1000);
        self.tagsPage.clickCancelDeleteButton();
        cy.wait(1000);
        self.tagsPage.clickDeleteTagButton();
        cy.wait(1000);
        self.tagsPage.clickConfirmDeleteButton();
        cy.wait(5000);
    })

    it('Test create edit tag', () => {
        self.tagsPage.clickCreateTagButton();
        cy.wait(1000);
        self.tagsPage.typeTagName('Editable tag');
        cy.wait(1000);
        self.tagsPage.typeTagSlug('slug');
        cy.wait(1000);
        self.tagsPage.typeTagDescription('This is the description of a new tag created that will then be edited using cypress');
        cy.wait(1000);
        self.tagsPage.clickSaveTagButton();
        cy.wait(1000);
        self.adminPage.clickTagsButton();
        cy.wait(1000);
        self.tagsPage.openTagWithSlug('slug');
        cy.wait(1000);
        self.tagsPage.typeTagName('Edited tag');
        cy.wait(1000);
        self.tagsPage.typeTagSlug('slug');
        cy.wait(1000);
        self.tagsPage.typeTagDescription('This is the description of a new tag created that has been edited using cypress');
        cy.wait(1000);
        self.tagsPage.clickSaveTagButton();
        cy.wait(5000);
    })

    it('Test create internal tag', () => {
        self.tagsPage.clickCreateTagButton();
        cy.wait(1000);
        self.tagsPage.typeTagName('#Internal tag');
        cy.wait(1000);
        self.tagsPage.typeTagSlug('internal-slug');
        cy.wait(1000);
        self.tagsPage.typeTagDescription('This is the description of a new internal tag created using cypress');
        cy.wait(1000);
        self.tagsPage.clickSaveTagButton();
        cy.wait(1000);
        self.adminPage.clickTagsButton();
        cy.wait(5000);
        self.adminPage.navigateToInternalTags();
    })



})
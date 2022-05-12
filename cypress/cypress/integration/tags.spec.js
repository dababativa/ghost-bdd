import { AdminPage, LoginPage, TagsPage } from './pages'

describe('Tags functionalities', () => {

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
        cy.screenshot('create-tag-initial-screen-4.42')
        self.tagsPage.clickCreateTagButton();
        cy.wait(1000);
        self.tagsPage.typeTagName('New tag name');
        cy.wait(1000);
        self.tagsPage.typeTagSlug('newTagSlug');
        cy.wait(1000);
        self.tagsPage.typeTagDescription('This is the description of a new tag created using cypress');
        cy.screenshot('create-tag-inputs-screen-4.42')
        cy.wait(1000);
        self.tagsPage.clickSaveTagButton();
        cy.screenshot('create-tag-saved-screen-4.42')
        cy.wait(1000);
        self.adminPage.clickTagsButton();
        cy.screenshot('create-tag-results-screen-4.42')
        cy.wait(1000);
        self.tagsPage.assertTagWithTagNameExists('New tag name');
        cy.wait(5000);
    })

    it('Test create delete tag', () => {
        cy.screenshot('delete-tag-initial-screen-4.42')
        self.tagsPage.clickCreateTagButton();
        cy.wait(1000);
        self.tagsPage.typeTagName('Deletable tag');
        cy.wait(1000);
        self.tagsPage.typeTagSlug('slug');
        cy.wait(1000);
        self.tagsPage.typeTagDescription('This is the description of a new tag created that will then be deleted using cypress');
        cy.screenshot('delete-tag-inputs-screen-4.42')
        cy.wait(1000);
        self.tagsPage.clickSaveTagButton();
        cy.wait(1000);
        cy.screenshot('delete-tag-tags-screen-4.42')
        self.adminPage.clickTagsButton();
        cy.wait(1000);
        self.tagsPage.openTagWithSlug('slug');
        cy.wait(1000);
        self.tagsPage.clickDeleteTagButton();
        cy.wait(1000);
        self.tagsPage.clickCancelDeleteButton();
        cy.wait(1000);
        self.tagsPage.clickDeleteTagButton();
        cy.screenshot('delete-tag-delete-screen-4.42')
        cy.wait(1000);
        self.tagsPage.clickConfirmDeleteButton();
        cy.screenshot('delete-tag-results-screen-4.42')
        cy.wait(1000)
        self.tagsPage.assertTagWithTagNameToNotExist('Deletable tag');
        cy.wait(3000);
    })

    it('Test create edit tag', () => {
        cy.screenshot('edit-tag-initial-screen-4.42')
        self.tagsPage.clickCreateTagButton();
        cy.wait(1000);
        self.tagsPage.typeTagName('Editable tag');
        cy.wait(1000);
        self.tagsPage.typeTagSlug('slug');
        cy.wait(1000);
        self.tagsPage.typeTagDescription('This is the description of a new tag created that will then be edited using cypress');
        cy.wait(1000);
        cy.screenshot('edit-tag-inputs-screen-4.42')
        self.tagsPage.clickSaveTagButton();
        cy.wait(1000);
        self.adminPage.clickTagsButton();
        cy.screenshot('edit-tag-tags-screen-4.42')
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
        cy.screenshot('edit-tag-edit-screen-4.42')
        cy.wait(1000);
        self.adminPage.clickTagsButton();
        cy.wait(1000);
        cy.screenshot('edit-tag-results-screen-4.42')
        self.tagsPage.assertTagWithTagNameToNotExist('Editable tag');
        self.tagsPage.assertTagWithTagNameExists('Edited tag');
        cy.wait(5000);
    })

    it('Test create internal tag', () => {
        cy.screenshot('create-internal-tag-initial-screen-4.42')
        self.tagsPage.clickCreateTagButton();
        cy.wait(1000);
        self.tagsPage.typeTagName('#Internal tag');
        cy.wait(1000);
        self.tagsPage.typeTagSlug('internal-slug');
        cy.wait(1000);
        self.tagsPage.typeTagDescription('This is the description of a new internal tag created using cypress');
        cy.wait(1000);
        cy.screenshot('create-internal-tag-inputs-screen-4.42')
        self.tagsPage.clickSaveTagButton();
        cy.screenshot('create-internal-tag-saved-screen-4.42')
        cy.wait(1000);
        self.adminPage.clickTagsButton();
        cy.wait(1000);
        self.adminPage.navigateToInternalTags();
        cy.screenshot('create-internal-tag-results-screen-4.42')
        self.tagsPage.assertTagWithTagNameExists('#Internal tag');
        cy.wait(5000);
    })



})
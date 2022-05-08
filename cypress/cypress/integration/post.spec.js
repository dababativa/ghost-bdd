import { AdminPage, LoginPage, PostPage } from './pages'

describe('Testing posts Managements', () => {

    before(() => {
        cy.visit(Cypress.env('login_url'))
        self.loginPage = new LoginPage();
        loginPage.login(Cypress.env('username'), Cypress.env('password'));
        self.adminPage = new AdminPage();
        self.postPage = new PostPage();
        cy.wait(3000);
        self.adminPage.navigateToPosts();
        cy.wait(1000);
        self.adminPage.signOut();

    })

    beforeEach(() => {
        //Given of each test
        cy.visit(Cypress.env('login_url'))
        //When of each test
        self.loginPage.login(Cypress.env('username'), Cypress.env('password'))
        cy.wait(2000);
        self.adminPage.navigateToPosts();
        cy.wait(2000);
    })

    //Every it element is the 'then' of the Given-then-when process

    it('Test create post', () => {
        self.postPage.clickCreatePostButton();
        cy.wait(1000);
        self.postPage.typePostTitle('Test 1 - Post');
        cy.wait(1000);
        self.postPage.typePostBody('New body for post 1');
        cy.wait(1000);
        self.postPage.clickPublishPostOptionButton();
        cy.wait(1000);
        self.postPage.clickPublishPostButton();
        cy.wait(1000);
        self.postPage.clickConfirmPublishPostButton();
        cy.wait(1000);
        self.postPage.clickBackToPostsButton();
        cy.wait(5000);
    })

    it('Test delete post', () => {
        self.postPage.clickPostTitleButton();
        cy.wait(1000);
        self.postPage.clickPostSettingsButton();
        cy.wait(1000);
        self.postPage.clickDeletePostButton();
        cy.wait(1000);
        self.postPage.clickConfirmDeletePostButton();
        cy.wait(5000);
    })

    it('Test Edit post', () => {
        self.postPage.clickCreatePostButton();
        cy.wait(1000);
        self.postPage.typePostTitle('Test 2 - Post');
        cy.wait(1000);
        self.postPage.typePostBody('New body for post 2');
        cy.wait(1000);
        self.postPage.clickPublishPostOptionButton();
        cy.wait(1000);
        self.postPage.clickPublishPostButton();
        cy.wait(1000);
        self.postPage.clickConfirmPublishPostButton();
        cy.wait(1000);
        self.postPage.clickBackToPostsButton();
        cy.wait(1000);
        self.postPage.clickPostTitleButton();
        cy.wait(1000);
        self.postPage.typePostTitle('Test 3 - Edites post');
        cy.wait(1000);
        self.postPage.typePostBody('body for post 3');
        cy.wait(1000);
        self.postPage.clickPublishPostOptionButton();
        cy.wait(1000);
        self.postPage.clickPublishPostButton();
        cy.wait(5000);
    })

    it('Test Shedule post', () => {
        self.postPage.clickCreatePostButton();
        cy.wait(1000);
        self.postPage.typePostTitle('Test 4 - Post');
        cy.wait(1000);
        self.postPage.typePostBody('New body for post 4');
        cy.wait(1000);
        self.postPage.clickPublishPostOptionButton();
        cy.wait(1000);
        self.postPage.clickCalendarButton();
        cy.wait(1000);
        self.postPage.clickDateCalendar();
        cy.wait(1000);
        self.postPage.clickPublishPostButton();
        cy.wait(1000);
        self.postPage.clickConfirmPublishPostButton();
        cy.wait(1000);
        self.postPage.clickBackToPostsButton();
        cy.wait(1000);
        self.postPage.clickShedulePost();
        cy.wait(5000);
    })
})
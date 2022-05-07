export default class AdminPage {

    constructor() {
    }

    getTagsButton() {
        return cy.get('#ember29')
    }

    clickTagsButton() {
        return this.getTagsButton().click()
    }

    signOut() {
        cy.get('svg.w3.mr1.fill-darkgrey').click()
        cy.wait(1000)
        cy.get('a[href="#/signout/"]').click()
        cy.wait(1000)
    }
}
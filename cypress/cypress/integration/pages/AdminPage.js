export default class AdminPage {

    constructor() {
    }

    getTagsButton() {
        return cy.get('#ember29')
    }

    clickTagsButton() {
        return this.getTagsButton().click()
    }
}
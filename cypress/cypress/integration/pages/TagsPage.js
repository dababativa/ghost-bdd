export default class TagsPage {

    constructor() {
    }

    getCreateTagButton() {
        return cy.get('#ember71')
    }

    clickCreateTagButton() {
        return this.getCreateTagButton().click()
    }

    getTagNameInput() {
        return cy.get('#tag-name')
    }

    typeTagName(tagName) {
        return this.getTagNameInput().type(tagName)
    }
    getTagSlugInput() {
        return cy.get('#tag-slug')
    }

    typeTagSlug(tagSlug) {
        return this.getTagSlugInput().type(tagSlug)
    }
    getTagDescriptionInput() {
        return cy.get('#tag-description')
    }

    typeTagDescription(tagDescription) {
        return this.getTagDescriptionInput().type(tagDescription)
    }

    getSaveTagButton() {
        return cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view')
    }

    clickSaveTagButton() {
        return this.getSaveTagButton().click()
    }

}
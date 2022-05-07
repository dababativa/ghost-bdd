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
        return this.getTagNameInput().type(`{selectAll}${tagName}`)
    }
    getTagSlugInput() {
        return cy.get('#tag-slug')
    }

    typeTagSlug(tagSlug) {
        return this.getTagSlugInput().type(`{selectAll}${tagSlug}`)
    }
    getTagDescriptionInput() {
        return cy.get('#tag-description')
    }

    typeTagDescription(tagDescription) {
        return this.getTagDescriptionInput().type(`{selectAll}${tagDescription}`)
    }

    getSaveTagButton() {
        return cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view')
    }

    clickSaveTagButton() {
        return this.getSaveTagButton().click()
    }

    getTagWithSlug(slug) {
        return cy.get(`a[href="#/tags/${slug}/"]`).first({ log: true })
    }

    openTagWithSlug(slug) {
        return this.getTagWithSlug(slug).click()
    }

    getDeleteTagButton() {
        return cy.get('button.gh-btn.gh-btn-red.gh-btn-icon')
    }

    clickDeleteTagButton() {
        return this.getDeleteTagButton().click();
    }

    getCancelDeleteButton() {
        return cy.get('div.modal-footer button.gh-btn').first();
    }

    clickCancelDeleteButton() {
        return this.getCancelDeleteButton().click({ force: true });
    }

    getConfirmDeleteButton() {
        return cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').first()
    }

    clickConfirmDeleteButton() {
        return this.getConfirmDeleteButton().click({ force: true })
    }

    deleteAllExistingTags() {
        cy.get('body')
            .then($body => {
                if ($body.find('li.gh-list-row.gh-tags-list-item').length) {
                    return true;
                }

                return false;
            })
            .then(tagsExist => {
                cy.log(tagsExist)
                if (tagsExist) {
                    cy.get('li.gh-list-row.gh-tags-list-item').each((value, index, collection) => {
                        cy.log(index)
                        cy.get('li.gh-list-row.gh-tags-list-item').first().click()
                        cy.wait(1000)
                        this.clickDeleteTagButton()
                        cy.wait(1000)
                        this.clickConfirmDeleteButton()
                        cy.wait(1000)
                    })

                }
            });
    }

}
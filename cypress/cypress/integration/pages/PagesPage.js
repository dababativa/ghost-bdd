export default class PagesPage {

    constructor() {
    }

    getPageSectionButton() {
        return cy.get('#ember28')
    }

    clickPageSectionButton() {
        return this.getPageSectionButton().click()
    }
    
    getNewPageButton() {
        return cy.get('.view-actions > a')
    }
    
    clickNewPageButton() {
        return this.getNewPageButton().click()
    }
    
    getPageNameInput() {
        return cy.get('textarea')
    }
    
    typePageName(pageName) {
        return this.getPageNameInput().type(`{selectAll}${pageName}`)
    }
    
    getPageTextInput() {
        return cy.get('div.koenig-editor__editor-wrapper')
    }
    
    typePageText(pageText) {
        return this.getPageTextInput().type(`{selectAll}${pageText}`)
    }
    
    getPublishMenu() {
    	return cy.get('div.ember-view span')
    }
    
    clickPublishMenu() {
        return this.getPublishMenu().click()
    }
    
    getPublishButton() {
    	return cy.get('button.gh-publishmenu-button span')
    }
    
    clickPublishButton() {
        return this.getPublishButton().click()
    }
    
    getReturnPagesSectionButton() {
    	return cy.get('div.ml3 > a')
    }
    
    clickReturnPagesSectionButton() {
        return this.getReturnPagesSectionButton().click()
    }
    
    getFirstPageItem() {
    	return cy.get('li.gh-posts-list-item > a').first()
    }
    
    clickFirstPageItem() {
        return this.getFirstPageItem().click()
    }
    
    getPageMenu() {
    	return cy.get('.settings-menu-toggle > span')
    }
    
    clickPageMenu() {
        return this.getPageMenu().click()
    }
    
    getPageDeleteButton() {
    	return cy.get('button.settings-menu-delete-button')
    }
    
    clickPageDeleteButton() {
        return this.getPageDeleteButton().click()
    }
    
    getConfirmDeleteButton() {
    	return cy.get('.gh-btn-red > span')
    }
    
    clickConfirmDeleteButton() {
        return this.getConfirmDeleteButton().click()
    }
    
    getUnpublishRadioButton() {
    	return cy.get('div.gh-publishmenu-radio-button').first()
    }
    
    clickUnpublishRadioButton() {
        return this.getUnpublishRadioButton().click()
    }

    takeScreenshot(screenshotName) {
        return cy.screenshot(`${screenshotName}`)
    }
    
    assertPageWithPageNameExists(pageName) {
        expect(cy.get('h3').contains(pageName)).to.exist
    }
    
    assertPageWithPageNameNotExists(pageName) {
        return cy.get('h3').contains(pageName).should('not.exist')
    }
    
    assertUnpublishedPageExists() {
        expect(cy.get('span.gh-badge-pink').contains('Draft')).to.exist
    }

}
